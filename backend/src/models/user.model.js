import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const useSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,'Password is required ']
    }
},{timestamps:true})

useSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this.id,
            email:this.email,
            username:this.username,
           
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
  useSchema.methods.generateRefreshToken=function(){
        return jwt.sign(
            {
                _id:this.id,
                
            },
            process.env.REFRESH_TOKEN_SECRET,{
                expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }

export const User=mongoose.model("User",useSchema)