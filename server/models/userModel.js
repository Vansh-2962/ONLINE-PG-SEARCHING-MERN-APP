import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Seeker','Poster'],
        required:true
    }
},{timestamps:true})

export const User = mongoose.model('User',userSchema);
