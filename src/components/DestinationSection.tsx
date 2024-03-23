import { destination } from "../constants/destinations"
import DestinationCard from "./DestinationCard"


const DestinationSection = () => {
    return (
        <div className="">
            <h4 className="text-[24px] md:text-[32px] leading-[38px] font-light py-8 text-center"><span className="font-normal hidden md:inline-block">Austria :</span> <span className="font-normal block md:hidden">Austria</span> Most popular diving destinations</h4>
            <div className="max-w-[850px] w-full mx-auto flex flex-wrap md:grid md:grid-cols-5 gap-4 md:gap-3 justify-center">
                {destination.map((destination, index) => (
                    <DestinationCard key={index} location={destination.location} image={destination.location} description={destination.description} />
                ))}
            </div>
        </div>
    )
}

export default DestinationSection