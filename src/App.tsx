import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Thesis from './pages/Thesis'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </>
  )
}

export default App
