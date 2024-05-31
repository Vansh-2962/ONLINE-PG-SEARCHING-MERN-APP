import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    poster:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    isBooked:{
        type:Boolean,
        default:false
    }
})

export const Room = mongoose.model("Room",roomSchema);