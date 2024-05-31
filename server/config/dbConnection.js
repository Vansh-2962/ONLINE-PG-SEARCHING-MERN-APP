import mongoose from "mongoose";

const dbConnection = ()=>{
     mongoose.connect(`${process.env.MONGO_URI}/pg_database`).then(()=>{
        console.log("Database connected");
     }).catch(()=>{
        console.log("Database connection failed");
     })
}

export default dbConnection;