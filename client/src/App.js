import { HomePage, ImagenOne, NotFoundPage, PostForm } from "./pages";
import {Route, Routes} from 'react-router-dom';
import { PostContainer } from "./context/postContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    
    <div className="bg-white">
      <PostContainer>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/new" element={<PostForm/>}/>
            <Route path="/image/:id" element={<ImagenOne/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/post/:id" element={<PostForm/>}/>
          </Routes>
          <Toaster/>
      </PostContainer>
    </div>

  );
}

export default App;
