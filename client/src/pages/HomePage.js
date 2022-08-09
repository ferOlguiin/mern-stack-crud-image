import { usePost } from "../context/postContext";
import {VscEmptyWindow} from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import { PostCard } from "../component/PostCard";

export const HomePage = () => {

  const {post} = usePost();
  console.log(post);

  if(post.length === 0) return (<div className="bg-dark d-flex justify-content-center align-items-center min-vh-100 flex-column">
    <VscEmptyWindow className="text-white fs-1 mb-2"/>
    <p className="text-white">No hay publicaciones por el momento, pruebe crear una</p>
    <Link className="btn btn-primary btn-sm" to='/new'>Crear publicación</Link>
  </div>)

  return (
    <div className="container-fluid min-vh-100 bg-dark">
      <nav className="navbar d-flex justify-content-sm-between justify-content-center p-3 align-items-center">
          <h4 className="bg-dark rounded text-white p-1 m-0">Nº de posteos: {post.length}</h4>
          <Link className="btn btn-primary" to='/new'>Crear publicación</Link>
      </nav>
      <div className="row d-flex justify-content-center p-5">
        <div className="col-sm-12 d-flex justify-content-around align-items-center mb-2">
          <h1 className="text-white">PUBLICACIONES</h1>
        </div>
        {
          post.map(posteo => (
            <PostCard post={posteo} key={posteo._id}/>
          ))
        }
      </div>
      
    </div>
  )
}
