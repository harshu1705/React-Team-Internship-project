import express from 'express'
import { blogUser,getBlogs,getBlogById,deleteBlog, updateBlog} from '../controllers/blog.controller.js'

const router=express.Router()

router.post('/blog',blogUser)
router.get('/blog',getBlogs)
router.get('/blog/:id',getBlogById)
router.delete('/blog/:id',deleteBlog)
router.put('/blog/:id',updateBlog)

export default router; 