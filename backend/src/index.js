import dotenv from "dotenv"
import app from './app.js'
import connectDB from "./db/index.js";

dotenv.config({
    path: '.env'
})
console.log(process.env.MONGODB_URI);
connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`)
    })
    
})
.catch((err)=>{
    console.log("MONGO db connection failes!!!",err)
})
