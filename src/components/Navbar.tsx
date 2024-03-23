import { NavbarItems } from "../constants"

const Navbar = () => {
    return (


        <nav className="bg-white relative">
            <div className="pl-[50px] h-[124px] flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/assets/logo.png" className="h-8" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto mr-[188px]" id="navbar-default">
                    <ul className="font-medium flex flex-col gap-5 md:flex-row md:mt-0">
                        {NavbarItems.map((item, index) => (

                            <li>
                                <a key={index} href="#" className={`block font-semibold text-[20px] md:hover:text-[#3B62C9] ${item.active ? "text-[#3B62C9]" : "text-[#000000]"}`}>{item.navItem} {item.icon && <span><img src={item.icon} /></span>}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute top-0 right-0">
                <svg width="187" height="124" viewBox="0 0 187 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_296)">
                        <path d="M187 0H0V124H187V0Z" fill="#DC0024" />
                        <path d="M0 0H19.7129L187 110.98V124H167.287L0 13.0975V0Z" fill="white" stroke="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_296">
                            <rect width="187" height="124" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </nav>


    )
}

export default Navbar