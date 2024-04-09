

const ProductMetaData = () => {
    const rate = 4.5;
    return (
        <div className=" px-[199px] mt-10">
            <div className=" flex justify-between items-start">

                <div className=" flex flex-col gap-3">
                    <p className=" text-4xl font-semibold">Sammy Diving</p>
                    <div className=" flex gap-12 items-center">
                        <div className="flex">
                            {
                                Array(Math.floor(rate)).fill(0).map((_, i) => (
                                    <img src="/assets/fullstar.png" alt="" className="w-5 h-5" key={`school-rating-${i}`} />
                                )
                                )
                            }
                            {
                                rate % 1 !== 0 &&
                                <img src="/assets/halfstar.png" alt="" className="w-5 h-5" />
                            }
                        </div>
                        <div className=" flex gap-2 p-1 items-center w-fit bg-[#B2DFFF] rounded-md">
                            <img src="/assets/recommend.svg" />
                            <p>Cerfitied Partner</p>

                        </div>

                    </div>
                    <div className=" flex gap-1 items-center">
                        <img src="/assets/location.png" className=" w-8 h-8" />
                        <p className=" text-lg"> 177 Langworth Port, Bartonview, OK 49876</p>
                    </div>

                </div>
                <div className=" flex flex-col gap-3">

                    <button className="text-[#0F80E8] bg-[#B2DFFF] px-10 py-3 rounded-lg text-[30px] font-semibold shadow-cardShadow">
                        Book HERE
                    </button>
                    <div className="flex text-xs items-center rounded-lg  cursor-pointer shadow-cardShadow border bg-white px-10 py-3 " >
                        <img src={`/assets/calendar.svg`} alt="calendar" className=" h-10 w-10" />
                        <span className="text-[24px] mx-1">next on</span>
                        <span className="text-[32px] font-normal">Oct. 27</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductMetaData