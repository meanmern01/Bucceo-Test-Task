

const HeroSection = () => {
    return (
        <div className="w-full bg-[url('/assets/hero-background.png')] bg-no-repeat bg-cover bg-center px-8 pt-36 pb-9">
            <p className="text-[28px]  sm:text-[32px] leading-tight font-light text-center text-[#FFFFFF]">We Simplify Diving</p>
            <h1 className="text-4xl sm:text-[64px] leading-tight text-white font-light text-center pt-16 pb-6" >Find your diving ...<br />and much more</h1>
            <div className="relative max-w-[820px] w-full mx-auto">
                <div className="absolute left-[20px] sm:left-[50px] top-1/2 -translate-y-1/2">
                    <img src="/assets/Search.svg" />
                </div>
                <input className="w-full focus:outline-none p-4 text-lg sm:text-2xl text-center font-light bg-white rounded-[10px] placeholder:text-[#7B7B7B]" type="text" placeholder="Where are you going?" />
            </div>
        </div>
    )
}

export default HeroSection