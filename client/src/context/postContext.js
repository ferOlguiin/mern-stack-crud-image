import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createPostRequest, deletePostRequest, getOnePostRequest, getPostRequest, updatePostRequest } from "../api/posts.js";

const postContext = createContext();

export const usePost = () => {
    const context = useContext(postContext);
    return context
}

export const PostContainer = ({children}) => {
    
    const [post, setPost] = useState([]);

    const getPost = async () => {
        const res = await getPostRequest();
        setPost(res.data);
    };
    useEffect(() => {
        getPost()   
   }, []);

    const createPost = async (posteo) => {
        const res = await createPostRequest(posteo);
        setPost([...post, res.data]);
        toast.success('Publicacion creada correctamente')
   };

    const deletePost = async (id) => {
        await deletePostRequest(id);
        setPost(post.filter((post) => post._id !== id)); 
        toast('Archivo eliminado', {
            icon: '🗑',
          });
    }

    const getOnePost = async (id) => {
        const res = await getOnePostRequest(id);
        return res.data;
    }

    const updatePost = async (id, posteo) => {
        const res = await updatePostRequest(id, posteo);
        setPost(post.map((documentos) => (documentos._id === id ? res.data : documentos)));
        toast.success('Publicacion actualizada correctamente')
    };
    

   


    
  return (
    <postContext.Provider value={{post, setPost, getPost, createPost, deletePost, getOnePost, updatePost}}>
        
        {children}
    </postContext.Provider>
  )
}
