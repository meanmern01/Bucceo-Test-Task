
import { data } from "./constant";
const ProductMetaData = () => {
    const rate = 4.5;
    return (
        <div className="py-5">
            <div className=" flex  justify-between items-start">
                <div className=" flex w-[60%] flex-col gap-2">
                    <p className=" text-3xl font-semibold tracking-tight">{data.title}</p>
                    <div className=" flex gap-2 items-center">
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
                        <div className=" flex gap-1 p-1 items-center w-fit bg-[#B2DFFF] rounded-md">
                            <img src="/assets/recommend.svg" className="w-5 h-5" />
                            <p className="text-[14px] font-semibold">Cerfitied Partner</p>

                        </div>

                    </div>
                    <div className=" flex gap-1 items-center">
                        <img src="/assets/location.png" className=" w-5 h-5" />
                        <p className="text-[18px] font-medium">{data.address}</p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-3xl font-semibold tracking-tight">{data.question}</h1>
                        <p className=" text-[16px]">{data.data}</p>
                    </div>
                </div>
                <div className=" flex w-[40%] flex-col gap-6 items-end">
                    <div className="flex gap-5">
                        <button className="text-[#0F80E8] bg-[#B2DFFF] px-5 py-2 rounded-lg text-[16px] leading-none font-semibold shadow-cardShadow">
                            Book HERE
                        </button>
                        <div className="flex items-center gap-2 rounded-lg cursor-pointer font-semibold shadow-cardShadow border bg-white px-4 py-3" >
                            <img src={`/assets/calendar.svg`} alt="calendar" className="h-[18px] w-[18px]" />
                            <span className="text-[16px] leading-none">next on Oct.27</span>
                        </div>
                    </div>
                    <div className="w-[80%] p-5 rounded-lg shadow-cardShadow">
                        <div className="mb-6">
                            <p className=" text-[25px] leading-none pb-2 font-bold">Socials</p>
                            <div className=" flex mb-2 gap-2 items-center">
                                <img src="/assets/facebook-black.svg" className=" w-5 h-5" />
                                <p className=" text-[16px] font-semibold">sammy.diving</p>
                            </div>
                            <div className=" flex gap-2 items-center">
                                <img src="/assets/Instagram-black.svg" className=" w-5 h-5" />
                                <p className="text-[16px] font-semibold">@sammy.diving</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <div className=" flex gap-2 items-center ">
                                <img src="/assets/label.svg" className=" h-5 w-5" />
                                <p className=" text-[#363b4e] text-xl tracking-tight font-semibold">Bester Preis Gesichert</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button className=" flex gap-2 items-center justify-center text-white bg-[#2870cc] px-4 py-3  rounded-lg text-[16px] leading-none font-semibold shadow-cardShadow">
                                    <img src="/assets/view-course.svg" className="h-[20px] w-[20px]" />  View Courses
                                </button>
                                <div className="flex items-center justify-center gap-2 rounded-lg border-[#2870cc] cursor-pointer font-semibold shadow-cardShadow border bg-white px-4 py-3" >
                                    <img src={`/assets/diving-fins.svg`} alt="calendar" className="h-[20px] w-[20px]" />
                                    <span className="text-[16px] text-[#2870cc]  leading-none">Other activities</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductMetaData