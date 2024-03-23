import { GalleryItems } from "../constants/gallery"

const Gallery = () => {
    return (
        <section className="mb-32">
            <h1 className="text-center text-2xl sm:text-[32px] font-normal pb-9">Looking for something special?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                {
                    GalleryItems.map((item, i) => (
                        <div className="relative h-80 sm:h-full even:hidden sm:even:block" key={`gallery-${i}`}>
                            <img src={item.image} alt={item.text} className="h-full w-full object-cover" />
                            <div className="absolute bottom-0 w-full bg-white/30 backdrop-blur-sm p-3">
                                <span className="text-white w-full block text-2xl font-semibold text-center">{item.text}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Gallery