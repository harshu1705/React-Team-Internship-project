import express from 'express'
import { addReview,getReviewsByBlogId} from '../controllers/review.controller.js'

const router=express.Router()

router.post('/review',addReview)
router.get('/review/:blogId',getReviewsByBlogId)


export default router; 