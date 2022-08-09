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
    <div className='col-md-5 card p-1 m-2 bg-white justify-content-center d-flex align-items-center shadow' key={post._id}>
        <h2 className='fw-bold text-break'>{post.title}</h2>
        <p className='fs-5 text-break'>{post.description}</p>
        {post.image ? <Link className='d-flex justify-content-center d-flex align-items-center' to={`/image/${post._id}`}>
            <img className='w-50 mb-2' src={post.image.secure_url} alt={"imagen: " + post._id}/>
            </Link> : ''}
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <button className='btn btn-danger btn-sm mx-1' onClick={() => handleDelete(post._id)}><VscTrash className='fs-5'/></button>
            <button className='btn btn-success btn-sm text-center' onClick={() => navigate(`/post/${post._id}`)}><VscEdit className='fs-5'/></button>
        </div>
        
    </div>
  )
}