
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { SignIn } from './pages/signin'
import { Signup } from './pages/signup'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/signup" element= {<Signup/>}></Route>
      <Route path ="/signin" element= {<SignIn/>}></Route>
      <Route path ="/blog/:id" element= {<Blog/>}></Route>
      <Route path ="/blogs" element= {<Blogs/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
