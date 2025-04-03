import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className=' font-ibm'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
