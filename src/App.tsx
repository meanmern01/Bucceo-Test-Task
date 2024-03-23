import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <p className="text-red-500">
        Welcome !
      </p>
      <Footer />
      <HeroSection />
    </>
  )
}

export default App
