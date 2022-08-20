import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { usePost } from '../context/postContext';
import {VscTrash, VscEdit} from 'react-icons/vsc';

export const PostCard = ({post}) => {

    const {deletePost} = usePost();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        toast((t) => (
            <div className='container-fluid bg-secondary'>
                <p className='text-white fw-bold'>Quieres eliminar el archivo? - {id}</p>
                <div>
                    <button className='btn btn-danger me-1' onClick={ () => { deletePost(id); toast.dismiss(t.id); } }>Borrar</button>
                    <button className='btn btn-light' onClick={ () => toast.dismiss(t.id) }>Cancelar</button>
                </div>
            </div>
        ),
        {
            style: {
                background: "#6c757d"
            }
        }
        )
    }

  return (
    <div className='card m-3 bg-dark text-white bg-orange d-flex justify-content-center align-items-center tamaño' key={post._id}>
        
        {post.image ? <Link to={`/image/${post._id}`}>
            <img className='card-img-top imgs' src={post.image.secure_url} alt={"imagen: " + post._id}/>
            </Link> : ''}
            <div className='card-body'>
                <h4 className='card-title text-break'>{post.title}</h4>
                <p className='card-text text-break'>{post.description}</p>
                <button className='btn btn-success btn-sm text-center' onClick={() => navigate(`/post/${post._id}`)}><VscEdit className='fs-5'/></button>
                <button className='btn btn-danger btn-sm mx-1' onClick={() => handleDelete(post._id)}><VscTrash className='fs-5'/></button>
            </div>
        
        
    </div>
  )
}