import { useEffect, useState } from "react"
import { NavbarItems } from "../constants/navbar"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        // Disable scrolling when modal is open
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function to remove the added style
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showMenu]);
    return (


        <nav className="bg-white relative shadow-cardShadow">
            <div className="md:h-[90px] lg:pl-5 xl:pl-[50px] lg:h-[100px] xl:h-[124px] flex items-center justify-between mx-auto p-5">
                <a href="#" className="flex items-center">
                    <img src="/assets/logo.png" className="h-14 md:h-[50px] lg:h-[70px] xl:h-[78px]" alt="Logo" />
                </a>
                <button onClick={() => setShowMenu(true)} type="button" className="flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
                    <img src="/assets/Hamburger.svg" />
                </button>
                <div className="hidden w-full md:block md:w-auto mr-[125px] lg:mr-[155px] xl:mr-[188px]" id="navbar-default">
                    <ul className="font-medium flex flex-col gap-3 lg:gap-5 md:flex-row md:mt-0">
                        {NavbarItems.map((item, index) => (

                            <li>
                                <a key={index} href="#" className={` font-semibold lg:text-[16px] xl:text-[20px] flex items-center gap-1 md:hover:text-[#3B62C9] ${item.active ? "text-[#3B62C9]" : "text-[#000000]"}`}>{item.navItem} {item.icon && <img src={item.icon} />}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute hidden md:block top-0 right-0">
                <img src="/assets/HeaderRight.svg" className="h-[90px] lg:h-[100px] xl:h-[124px] w-full" />
            </div>

            <div onClick={(e) => e.stopPropagation()} className={`${showMenu ? "translate-x-0 left-0" : "-translate-x-full"}  justify-between duration-300 ease-in-out fixed top-0 right-0 bottom-0 z-20 left-0 w-4/5`}>
                <div className=" bg-white w-full h-screen">
                    <div className="flex justify-between py-4 px-6 pr-2 items-center">
                        <img src="/assets/logo.png" className="h-14 md:h-[50px]" alt="Logo" />
                        <div className="flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
                            <img onClick={(e) => {
                                e.stopPropagation();
                                setShowMenu(false);
                            }} src="/assets/Close.svg" />
                        </div>
                    </div>
                    <div className="w-full block md:w-auto py-4 px-6" id="navbar-default">
                        <ul className="font-medium flex flex-col gap-3">
                            {NavbarItems.map((item, index) => (

                                <li>
                                    <a onClick={() => setShowMenu(false)} key={index} href="#" className={` font-semibold text-[20px] flex items-center gap-1 p-2 pl-3 rounded-lg md:hover:text-[#3B62C9] ${item.active ? "bg-[#3B62C9] text-white" : " bg-white text-black"}`}>{item.navItem} {item.icon && <img src={item.icon} />}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowMenu(false)} className={`${showMenu ? "fixed top-0 left-0 bottom-0 right-0 z-10 bg-black bg-opacity-70 transition-all duration-300 ease-in-out" : "fixed "}`}></div>
        </nav>


    )
}

export default Navbar