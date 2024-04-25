import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-detail' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
