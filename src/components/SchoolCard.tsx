import { SchoolData } from "../constants/schools"

interface School {
    school: SchoolData
}

const SchoolCard = ({ school }: School) => {
    return (
        <div className="px-2">
            <div className="shadow-cardShadow rounded-[21px] overflow-hidden relative">

                <img src={`/assets/${school.image}`} alt={school.schoolName} className="w-full" />

                {school.liked && <img src="/assets/like.svg" alt="" className="absolute w-7 h-7 right-3 top-3" />}

                <div className="p-2 w-full relative">
                    <p className="text-xs">{school.location}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-lg sm:text-2xl">{school.schoolName}</span>
                        <div className="flex">
                            {
                                Array(Math.floor(school.rating)).fill(0).map((_, i) => (
                                    <img src="/assets/fullstar.png" alt="" className="w-5 h-5" key={`school-rating-${i}`} />
                                )
                                )
                            }
                            {
                                school.rating % 1 !== 0 &&
                                <img src="/assets/halfstar.png" alt="" className="w-5 h-5" />
                            }
                        </div>
                    </div>
                    <div className="flex gap-2 absolute -top-6 right-2">
                        {
                            school.date.map((date, i) => (
                                <div className="flex text-xs items-center rounded-full shadow-cardShadow bg-white p-2 px-3 " key={`school-date-${i}`}>
                                    <img src={`/assets/${date.image}`} alt="calendar" />
                                    <span className="text-xs mx-1">{date.text}</span>
                                    <span className="text-sm font-normal">{date.highlight}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex items-center gap-1 flex-wrap sm:gap-4 py-2 text-xs">
                        {
                            school.features.map((feature, i) => (
                                <div className="flex gap-2 items-center" key={`school-feature-${i}`}>
                                    {feature.image && <img src={`/assets/${feature.image}`} alt="" />}
                                    <span>{feature.text}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolCard