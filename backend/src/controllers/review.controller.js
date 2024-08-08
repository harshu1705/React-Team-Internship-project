import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Reviews } from "../models/review.model.js";
import { Blogs } from '../models/blog.model.js';  
import { User } from "../models/user.model.js";
const addReview = asyncHandler(async (req, res) => {
  const { username, blogId, description } = req.body;
 if ([username,blogId, description].some((field) => field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }
  
    const blogExists = await Blogs.findOne({ _id: parseInt(blogId, 10) }).exec();

    if(!blogExists){
        throw new ApiError(404,"Not found")
    }

   
    if (username) {
      const user = await User.findOne({ username }).exec();
      if (!user) {
        throw new ApiError(404, "User not found");
      }
    }

     const newReview = new Reviews({
    username,
    blogId:parseInt(blogId, 10),
    description,
  });

  
  await newReview.save();

  res.status(201).json(new ApiResponse(201, "Review created successfully", newReview));
});

const getReviewsByBlogId = asyncHandler(async (req, res) => {
    const { blogId } = req.params;
  
    const reviews = await Reviews.find({ blogId: parseInt(blogId, 10) }).exec(); 
  
    res.status(200).json(new ApiResponse(200,  reviews,'Reviews fetched successfully individually'));
  });

  const getReview=asyncHandler(async(req,res)=>{
   const review=await Reviews.find()


    if(!review){
        throw new ApiError(404,"Not found")
    }

    res.status(200).json(new ApiResponse(200,review, 'Reviews fetched successfully'));
  })

  const deleteReview=asyncHandler(async(req,res)=>{
    const {reviewId}=req.params
    const review=await Reviews.findByIdAndDelete(reviewId)
    
    if(!review){
      throw new ApiError(404,'Not found review')
    }
    res.status(200).json(new ApiResponse(200,review,"Review deleted successfully"))


  })
export { addReview, getReviewsByBlogId,getReview ,deleteReview};
