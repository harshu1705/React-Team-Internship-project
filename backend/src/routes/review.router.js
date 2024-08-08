import express from 'express'
import { addReview,deleteReview,getReview,getReviewsByBlogId} from '../controllers/review.controller.js'

const router=express.Router()

router.post('/review',addReview)
router.get('/review/:blogId',getReviewsByBlogId)
router.get('/review',getReview)
router.delete('/review/:reviewId',deleteReview)


export default router; 