import mongoose,{Schema} from "mongoose";

const blogSchema=new Schema({
    _id:{
        type:Number,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    // avatar:{
    //     type:String,
    //     required:true
    // }
},{timestamps:true})
export const Blogs=mongoose.model("Blogs",blogSchema)