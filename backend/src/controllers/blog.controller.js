import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Blogs } from "../models/blog.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { getNextSequenceValue } from "../models/counter.model.js"; 

const blogUser = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if ([title, description].some((field) => field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

   
    const newId = await getNextSequenceValue("blogId");

   
    const newBlog = new Blogs({
        _id: newId, 
        title,
        description,
    });

    await newBlog.save();

    res.status(201).json(new ApiResponse(201, "Blog created successfully", newBlog));
});

const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blogs.find();
    console.log(req.body)
    res.status(200).json(new ApiResponse(200, blogs ,"Blogs retrieved successfully"));
});

const getBlogById = asyncHandler(async (req, res) => {
    const { id } = req.params;

   
    const blog = await Blogs.findById(id);
    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }
    res.status(200).json(new ApiResponse(200, blog, "Blog retrieved successfully"));
});

const deleteBlog=asyncHandler(async(req,res)=>{
    const{id}=req.params
    const blog=await Blogs.findByIdAndDelete(id);
    if(!blog){
        throw new ApiError(404,"Blog not found")
    }
 
    res.status(200).json(new ApiResponse(200,"Blog deleted"))
})

const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
  
    if (!title || !description) {
      throw new ApiError(400, 'All fields are required');
    }
  
    try {
      const updatedBlog = await Blogs.findByIdAndUpdate(
        id,
        { title, description },
        { new: true } 
      );
  
      if (!updatedBlog) {
        throw new ApiError(404, 'Blog not found');
      }
  
      res.status(200).json(new ApiResponse(200, updatedBlog, 'Blog updated successfully'));
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  };

export { blogUser, getBlogs, getBlogById,deleteBlog,updateBlog };
