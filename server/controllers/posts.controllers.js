import Post from '../models/Post.js';
import { deleteImage, uploadImage } from '../utils/cloudinary.js';
import fs from 'fs-extra';

export const getPosts = async (req, res) => {
    
    const post = await Post.find().lean();
    return res.send(post);
}

export const createPost = async (req, res) => {
    try {
        
        const {title, description} = req.body;

        const newPost = new Post({title, description});

        
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath);
            newPost.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
        
            await fs.unlink(req.files.image.tempFilePath);
        }

        await newPost.save();
        
        return res.json(newPost);

    } catch (error) {
        res.send(error);
    }

} 

export const updatePost = async (req, res) => {

    try {

        const {id} = req.params;

        const postActualizado = await Post.findByIdAndUpdate(id, req.body, {new: true});

        return res.json(postActualizado);

    } catch (error) {
        res.send(error)
    }

}

export const deletePost = async (req, res) => {

    const postRemoved = await Post.findByIdAndDelete(req.params.id);

    if(postRemoved.image.public_id){
        await deleteImage(postRemoved.image.public_id);
    }

    return res.send("tarea e imagen borrada correctamente");


}

export const getOnePost = async (req, res) => {

    const uniquePost = await Post.findById(req.params.id);

    res.send(uniquePost);
}