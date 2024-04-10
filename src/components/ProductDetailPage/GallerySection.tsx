

const GallerySection = () => {
    return (
        <div className="">
            <div className=" w-full flex h-[480px] gap-2 overflow-hidden">
                <div className=" w-3/4 h-full">
                    <img src="/assets/school-1.png" className=" object-cover rounded-md w-full h-full" />
                </div>
                <div className=" flex flex-col w-[25%] gap-2 h-full">
                    <div className=" flex-1 ">
                        <img src="/assets/school-2.png" className=" object-cover rounded-md w-full h-full" />
                    </div>
                    <div className=" flex-1 ">
                        <img src="/assets/school-1.png" className=" object-cover rounded-md w-full h-full" />
                    </div>
                    <div className=" flex-1">
                        <img src="/assets/school-3.png" className=" object-cover rounded-md w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection