

const GallerySection = () => {
    return (
        <div className=" px-[199px] mt-10">
            <div className=" w-full flex h-[480px] rounded-md overflow-hidden">
                <div className=" w-3/4  h-ful">
                    <img src="/assets/school-1.png" className=" object-cover w-full h-full" />


                </div>
                <div className=" flex flex-col w-[25%]  h-full">
                    <div className=" flex-1 ">
                        <img src="/assets/school-2.png" className=" object-cover w-full h-full" />

                    </div>
                    <div className=" flex-1 ">
                        <img src="/assets/school-1.png" className=" object-cover w-full h-full" />

                    </div>
                    <div className=" flex-1">
                        <img src="/assets/school-3.png" className=" object-cover w-full h-full" />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default GallerySection