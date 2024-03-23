import { Company, Discover, Legal } from "../constants/footer"

const Footer = () => {

    return (
        <footer className="bg-footerBg text-white">
            <div className="sm:mx-auto w-full lg:max-w-[991px] xl:max-w-[1199px] 2xl:max-w-[1320px] px-[50px] sm:px-4 py-6 lg:pt-8 pb-0">
                <div className="pl-6 sm:pl-0 md:flex md:justify-between pb-11">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            LOGO
                        </a>
                    </div>
                    <div className="pr-6 sm:pr-0 grid grid-cols-1 gap-11 sm:gap-[73px] sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <h2 className="text-2xl font-semibold uppercase">Discover</h2>
                            <ul className="font-normal text-xl">
                                {
                                    Discover.map((item, i) => (
                                        <li className="" key={`Discover${i}`}>
                                            <a href={item.link} className="hover:underline">{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold uppercase ">Legal</h2>
                            <ul className="font-normal text-xl">
                                {
                                    Legal.map((item, i) => (
                                        <li className="" key={`Legal${i}`}>
                                            <a href={item.link} className="hover:underline">{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold uppercase ">Company</h2>
                            <ul className="font-normal text-xl">
                                {
                                    Company.map((item, i) => (
                                        <li className="" key={`Company${i}`}>
                                            <a href={item.link} className="hover:underline">{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className=" border-white sm:mx-auto" />
                <div className="sm:flex sm:items-center py-9 sm:justify-between">
                    <span className="font-semibold text-xl sm:text-center">
                        Bucceo™ © 2023
                        <span className="font-normal">All Rights Reserved.</span>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="">
                            <img src="/assets/Facebook.svg" alt="facebook" />
                        </a>
                        <a href="#" className="ms-5">
                            <img src="/assets/Instagram.svg" alt="instagram" />
                        </a>
                        <a href="#" className="ms-5">
                            <img src="/assets/Linkedin.svg" alt="linkedin" />
                        </a>
                        <a href="#" className="ms-5">
                            <img src="/assets/Tiktok.svg" alt="tiktok" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer