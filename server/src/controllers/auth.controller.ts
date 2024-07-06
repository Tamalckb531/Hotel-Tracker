import { z } from 'zod';
import bcryptjs from 'bcryptjs';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

interface bodyProps{
    firstName : string,
    lastName : string,
    email : string,
    password : string,
}
const SignUpSchema = z.object({
    firstName: z.string().min(3).max(10),
    lastName: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(5)
})

export const signupProcess = async(req: any, res: any) => {
    const { firstName, lastName, email, password }: bodyProps = req.body;
    
    try {
        SignUpSchema.parse({ firstName, lastName, email, password });

        //? email already exist
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({
                msg: "Email already exists"
            })
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = await prisma.user.create({
            data: { 
                firstName,
                lastName,
                email,
                password:hashedPassword
            }
        })

        res.json({ msg: "Sign-up successful", user:newUser });
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


export const loginProcess = (req: any, res: any) => {
    res.json({ msg: "Login is working fine" })
}