interface propsTypes {
    image: string,
    location: string,
    description: string,
}

const DestinationCard = ({ image, location, description, }: propsTypes) => {
    return (
        <div className="flex flex-col w-[162px] md:w-[150px] lg:w-[162px] gap-1 items-center justify-center last:hidden md:last:flex">
            <img className=" w-[120px] h-[120px] rounded-full bg-cover" src={`/assets/${image}.png`} />
            <h6 className="text-[24px] md:text-[22px] lg:text-[24px] leading-7 text-center font-semibold">{location}</h6>
            <p className=" text-[14px] md:text-[12px] lg:text-[14px] leading-4 text-center font-normal">{description}</p>
        </div>
    )
}

export default DestinationCard