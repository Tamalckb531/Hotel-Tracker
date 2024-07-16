import { z } from 'zod';
import bcryptjs from 'bcryptjs';
import { PrismaClient } from '@prisma/client'
import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

//? --------- keys,types and interfaces --------- 
interface SignUpBodyProps{
    firstName : string,
    lastName : string,
    email : string,
    password : string,
}
type LoginBodyProps = Pick<SignUpBodyProps, 'email' | 'password'>;

const secretKey = 'my-secret-key';
//? --------- types and interfaces --------- 

//? --------- Zod Schema --------- 

const BaseAuthSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
});

const SignUpSchema = BaseAuthSchema.extend({
    firstName: z.string().min(3).max(10),
    lastName: z.string().min(3).max(10),
});


const LoginSchema = BaseAuthSchema;

//? Also could have done this for Typescript schema 
// type SignUpBodyPropsX = z.infer<typeof SignUpSchema>
// type LoginBodyPropsX = Pick<SignUpBodyProps, 'email' | 'password'>;
//? --------- Zod Schema --------- 

export const signupProcess = async(req: any, res: any) => {
    const { firstName, lastName, email, password }: SignUpBodyProps = req.body;
    
    try {
        SignUpSchema.parse({ firstName, lastName, email, password });

        //? email already exist
        const existingUser:User|null = await prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({
                msg: "Email already exists"
            })
        }

        const hashedPassword:string = bcryptjs.hashSync(password, 10);

        const newUser:User = await prisma.user.create({
            data: { 
                firstName,
                lastName,
                email,
                password:hashedPassword
            }
        })

        //? Token Generation with JWT and sending as cookie

        const token:string = jwt.sign(
            { id: newUser.id },
            secretKey
        )

        const { password: pass, ...userWithoutPass } = newUser;

        
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json({
            msg: "Sign-up Successful",
            user: userWithoutPass
        });
    } catch (error: any) {
        
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                msg: "Invalid input data",
                errors: error.errors
            });
        }
        res.status(500).json({msg: error.message})
    }

}


export const loginProcess = async(req: any, res: any) => {
    const { email, password }: LoginBodyProps = req.body;
    
    try {

        //? Validation via zod
        LoginSchema.parse({ email, password });

        //? Getting the user via email
        const validUser: User | null = await prisma.user.findUnique({
            where: { email }
        });

        if (!validUser) {
            return res.status(404).json({
                msg: "Email not registered"
            })
        }

        //? Password validation with bcryptJs
        const validPassword: boolean = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
            return res.status(404).json({
                msg: "Invalid Password"
            })
        }

        //? Token Generation with JWT and sending as cookie

        const token:string = jwt.sign(
            { id: validUser.id },
            secretKey
        )

        const { password: pass, ...userWithoutPass } = validUser;

        
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json({
            msg: "Log-in Successful",
            user: userWithoutPass
        });
    } catch (error: any) {
        
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                msg: "Invalid input data",
                errors: error.errors
            });
        }
        res.status(500).json({msg: error.message})
    }
}