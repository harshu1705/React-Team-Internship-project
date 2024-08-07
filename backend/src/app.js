import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes

import userRouter from './routes/user.routes.js'
import blogRouter from './routes/blog.router.js'
import reviewRouter from './routes/review.router.js'


app.use("/api/v1/users",userRouter)
app.use("/api/v1/users",blogRouter)
app.use("/api/v1/users",reviewRouter)

//http://localhost:8000/api/v1/users/register

export default app;