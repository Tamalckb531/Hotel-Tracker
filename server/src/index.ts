import express from "express";

import authRoute from './routes/auth.route'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';


dotenv.config();

const app = express(); 
const port = 3000;

app.use(cors());
app.use(express.json()); 
app.use(cookieParser()); 

app.use('/api/auth', authRoute);

//! test
app.get('/', (req, res) => {
    res.status(200).json({
        endPoint: "test",
        status:"healthy"
    })
})

app.listen(port, () => {
    console.log("Server is running in port : ", port);
});

//? Global catch -> run at the last and catch all the thrown res
app.use((err:any, req:any, res:any, next:any) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal server error";

    res.status(statuscode).json({
        success: false,
        statuscode,
        message
    })
})