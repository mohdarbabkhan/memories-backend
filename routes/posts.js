import express from "express";
import { getPosts,createPosts,deletepost,updatePost,likePost } from "../controllers/posts.js";
const router = express.Router();
 
//  http://localhost:5000/posts

router.get("/",getPosts)
router.post("/",createPosts)
router.delete("/:id",deletepost)
router.patch("/:id",updatePost)
router.patch("/:id/likepost",likePost)

export default router;