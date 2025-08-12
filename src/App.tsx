import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import BlogPost from './components/BlogPost'
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
