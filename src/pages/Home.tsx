import DestinationSection from "../components/Home/DestinationSection"
import Gallery from "../components/Home/Gallery"
import HeroSection from "../components/Home/HeroSection"
import Schools from "../components/Home/Schools"


const Home = () => {
    return (
        <>

            <HeroSection />
            <DestinationSection />
            <Schools title={"Diving Schools"} />
            <Gallery />

        </>
    )
}

export default Home