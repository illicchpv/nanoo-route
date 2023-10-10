import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import {Home} from './Pages/Homepage'
import {About} from './Pages/Aboutpage'
import {Blog} from './Pages/Blogpage'
import {Notfound} from './Pages/Notfoundpage'

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <div>
        <h1>Get started with react router 6</h1>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </>
  )
}

export default App

// import React from "react";
// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );
