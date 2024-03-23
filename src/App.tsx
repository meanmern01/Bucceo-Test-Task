import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import DestinationSection from './components/DestinationSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Schools from './components/Schools'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <DestinationSection />
      <Schools />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
