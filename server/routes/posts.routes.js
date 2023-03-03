import { Router } from "express";
import { createPost, deletePost, getOnePost, getPosts, updatePost, welcome } from "../controllers/posts.controllers.js";
const router = Router();
import fileUpload from "express-fileupload";


//Inicio
router.get("/", welcome);

router.get("/posts", getPosts);

router.post("/create", fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), createPost);

router.put("/edit/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.get("/post/:id", getOnePost);


export default router;