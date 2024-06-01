import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './config/dbConnection.js';
import userRoute from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config()

const port = process.env.PORT || 3000;

//middlewares
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials:true
    }
));
app.use(express.json());
app.use(cookieParser());


//routes
app.use('/api/v1/user',userRoute)

//listening to server
app.listen(port,()=>{
    dbConnection(); //connecting to DATABASE;
    console.log(`Server connected at port ${port}`);
})