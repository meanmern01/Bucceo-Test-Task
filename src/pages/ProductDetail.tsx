
import GallerySection from '../components/ProductDetailPage/GallerySection'
import ProductMetaData from '../components/ProductDetailPage/ProductMetaData'
import BreadCrumb from '../components/shared/BreadCrumb'

const ProductDetail = () => {
    return (
        <div className='max-w-screen-xl m-auto'>
            <BreadCrumb />
            <ProductMetaData />
            <GallerySection />
        </div>
    )
}

export default ProductDetail