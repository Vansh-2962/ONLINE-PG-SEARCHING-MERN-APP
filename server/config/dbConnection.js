import mongoose from "mongoose";

const dbConnection = async()=>{
    try {
        const res = await mongoose.connect(`${process.env.MONGO_URI}/PG_DATABASE`)
        if(res){
            console.log("Database connected")
        }
    } catch (error) {
        console.log("Database could not be connected" + error);
    }
   
}

export default dbConnection;