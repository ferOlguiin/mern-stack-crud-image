import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePost } from "../context/postContext";
import {VscChromeClose} from 'react-icons/vsc';

export const ImagenOne = () => {

    const [publicacion, setPublicacion] = useState({
        title: '',
        description: '',
        image: null
      });

    const {getOnePost} = usePost();
    const params = useParams();

    useEffect(() => {
        (async () => {
            if(params.id){
            const posteo = await getOnePost(params.id);
            setPublicacion(posteo);
            }
        })();
    }, [params.id])


  return (
    <div className="container-fluid vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
        
        <div className="d-flex justify-content-center align-self-end mb-5 me-5">
            <Link to="/">
                <h3><VscChromeClose className="text-white d-flex align-items-center bg-danger rounded justify-content-center"/></h3>
            </Link>
        </div>
        
        {publicacion.image ? <img src={publicacion.image.secure_url} className="imagenRender img-fluid rounded"/> : ''}
       
        
        
    </div>
  )
}
