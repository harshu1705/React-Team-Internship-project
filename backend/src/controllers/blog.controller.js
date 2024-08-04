import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Blogs } from "../models/blog.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const blogUser = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if ([title, description].some((field) => field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const newBlog = new Blogs({
        title,
        description,
    });

    await newBlog.save();

    res.status(201).json(new ApiResponse(201, "Blog created successfully", newBlog));
});

const getBlogs=asyncHandler(async(req,res)=>{
    const blogs=await Blogs.find()
    res.status(201).json(new ApiResponse(201,"Blog retrieved successfully",blogs))
})


export { blogUser,getBlogs };
