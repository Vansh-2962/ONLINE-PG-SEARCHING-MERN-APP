import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './config/dbConnection.js';
const app = express();
dotenv.config()

const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());


//routes


//listening to server
app.listen(port,()=>{
    dbConnection(); //connecting to DATABASE;
    console.log(`Server connected at port ${port}`);
})