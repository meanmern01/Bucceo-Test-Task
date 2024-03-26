import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SchoolData, schools } from "../constants/schools";
import SchoolCard from "./SchoolCard";

const Schools = () => {
    const [showMore, setShowMore] = useState(false)
    const [cardsData, setCardsData] = useState<SchoolData[]>([])

    useEffect(() => {
        if (showMore) {
            setCardsData(schools)
        } else {
            const firstThreeElements = schools.slice(0, 3);
            setCardsData(firstThreeElements);
        }
    }, [showMore]);

    function SampleNextArrow(props: any) {
        const { className, onClick } = props;
        return (

            <div className={className} onClick={onClick}>
                <img className="w-[40px] h-[40px]" src="/assets/NextButton.svg" alt="" />
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <img className="w-[40px] h-[40px]" src="/assets/NextButton.svg" alt="" />
            </div>
        );
    }

    var settings = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    initialSlide: 2.5,
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    initialSlide: 1.5,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <section className="mx-auto w-[90%] xl:max-w-[1199px] py-[100px] 2xl:max-w-[1320px]">
            <h1 className="text-center text-2xl sm:text-[32px] font-normal pb-9">Diving Schools</h1>
            <div className="relative hidden md:block">
                <Slider {...settings}>
                    {
                        schools.map((school, i) => (
                            <SchoolCard school={school} key={`school-${i}`} />
                        ))
                    }
                </Slider>
                <div className="absolute right-0 top-0 bottom-0 w-[250px] z-10 bg-linearGradient"></div>
            </div>
            <div className="flex flex-wrap gap-4 m-auto md:hidden">
                {
                    cardsData.map((school, i) => (
                        <SchoolCard school={school} key={`school-${i}`} />
                    ))
                }
                <p className="px-[14px] text-2xl sm:text-[32px] text-right w-full cursor-pointer"
                    onClick={() => setShowMore(prev => prev = !prev)} >
                    {showMore ? "Less" : "More"} Trips...
                </p>
            </div>
        </section>
    )
}

export default Schools