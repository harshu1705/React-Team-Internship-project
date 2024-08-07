import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Reviews } from "../models/review.model.js";
import { Blogs } from '../models/blog.model.js';  

const addReview = asyncHandler(async (req, res) => {
  const {  description } = req.body;
   

 
    if ([ description].some((field) => field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }
  
    const blogExists = await Blogs.findOne({ _id: parseInt(blogId, 10) }).exec();

    if(!blogExists){
        throw new ApiError(404,"Not found")
    }
  const newReview = new Reviews({
    blogId:parseInt(blogId, 10),
    description,
  });

  
  await newReview.save();

  res.status(201).json(new ApiResponse(201, "Review created successfully", newReview));
});

const getReviewsByBlogId = asyncHandler(async (req, res) => {
    const { blogId } = req.params;
  
    const reviews = await Reviews.find({ blogId: parseInt(blogId, 10) }).exec(); 
  
    res.status(200).json(new ApiResponse(200, 'Reviews fetched successfully', reviews));
  });

export { addReview, getReviewsByBlogId };
