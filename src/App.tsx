import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Blog from './pages/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
