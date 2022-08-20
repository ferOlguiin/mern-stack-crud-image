import { usePost } from "../context/postContext";
import {VscEmptyWindow} from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import { PostCard } from "../component/PostCard";

export const HomePage = () => {

  const {post} = usePost();

  if(post.length === 0) return (<div className="bg-dark d-flex justify-content-center align-items-center min-vh-100 flex-column">
    <VscEmptyWindow className="text-white fs-1 mb-2"/>
    <p className="text-white">No hay publicaciones por el momento, pruebe crear una</p>
    <Link className="btn btn-info btn-sm" to='/new'>Crear publicación</Link>
  </div>)

  return (
    <div className="container-fluid m-0 p-0 min-vh-100">
      <nav className="container-fluid d-flex justify-content-center p-3 align-items-center bg-orange">
          <h1 className="text-dark fw-bold">App M-E-R-N images</h1>
      </nav>
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
            <div className="d-flex justify-content-sm-between justify-content-center flex-sm-row flex-column align-items-center p-4 mt-3">
              <h2 className="text-dark text-center mx-5 my-0 p-0">Publicaciones ({post.length})</h2>
              <Link className="btn btn-primary mx-5 my-0 p-2" to='/new'>Crear publicación</Link>
            </div>   
        <div className="d-flex justify-content-sm-center align-items-center flex-wrap container-fluid m-0">
          {
            post.map(posteo => (
              <PostCard post={posteo} key={posteo._id}/>
            ))
          }
        </div>
      </div>
      
    </div>
  )
}
