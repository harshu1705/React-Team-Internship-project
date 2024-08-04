import express from 'express'
import { blogUser,getBlogs} from '../controllers/blog.controller.js'

const router=express.Router()

router.post('/blog',blogUser)
router.get('/blog',getBlogs)

export default router; 