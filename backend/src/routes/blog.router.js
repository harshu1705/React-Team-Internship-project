import express from 'express'
import { blogUser,getBlogs,getBlogById} from '../controllers/blog.controller.js'

const router=express.Router()

router.post('/blog',blogUser)
router.get('/blog',getBlogs)
router.get('/blog/:id',getBlogById)

export default router; 