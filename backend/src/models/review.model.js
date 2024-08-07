import mongoose,{Schema} from "mongoose";

const reviewSchema=new Schema({
    blogId:{
        type:Number,
        required:true,
       
    },
    
    description:{
        type:String,
        required:true,
        trim:true,
    },
   
},{timestamps:true})
export const Reviews=mongoose.model("Reviews",reviewSchema)