import { Router } from "express";
import { createPost, deletePost, getOnePost, getPosts, updatePost } from "../controllers/posts.controllers.js";
const router = Router();
import fileUpload from "express-fileupload";


router.get("/posts", getPosts);

router.post("/create", fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), createPost);

router.put("/edit/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.get("/post/:id", getOnePost);


export default router;