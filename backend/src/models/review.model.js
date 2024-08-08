import mongoose,{Schema} from "mongoose";

const reviewSchema=new Schema({
    username: {
        type: String,
        required: true, 
    },
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