import PostMessage from "../models/postSchema.js"

export const getPosts = async(req,res)=>{
    try {
        const post = await PostMessage.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPosts = async(req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const deletepost = async(req,res)=>{
    const {id} = req.params;

    try {
        await PostMessage.findByIdAndRemove(id);
        res.status(200).json({message:"Succesfully deleted"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const updatePost = async(req,res)=>{
    const {id} = req.params;
    const post = req.body;
    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(id,post)
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const likePost = async(req,res)=>{
    const {id} = req.params;
    try {
        const post = await PostMessage.findById(id);
        const likedpost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1})
        res.status(200).json(likedpost)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}