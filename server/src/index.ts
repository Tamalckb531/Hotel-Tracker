import express from "express";

import userRoute from './routes/userRoute'

const app = express(); 
const port = 3000;

app.use('/test/user', userRoute);

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