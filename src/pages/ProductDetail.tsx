import Schools from "../components/Home/Schools";
import BeliebtesteSection from "../components/ProductDetailPage/BeliebtesteSection";
import GallerySection from "../components/ProductDetailPage/GallerySection";
import InformationSection from "../components/ProductDetailPage/InformationSection";
import MarineLife from "../components/ProductDetailPage/MarineLife";
import ProductMetaData from "../components/ProductDetailPage/ProductMetaData";
import Service from "../components/ProductDetailPage/Service";
import YoutubeSection from "../components/ProductDetailPage/YoutubeSection";
import BreadCrumb from "../components/shared/BreadCrumb";

const ProductDetail = () => {
  return (
    <div className="sm:mx-auto w-full lg:max-w-[991px] xl:max-w-[1199px] 2xl:max-w-[1320px] px-[50px] sm:px-4 py-6 lg:pt-0 pb-0">
      <BreadCrumb />
      <GallerySection />
      <ProductMetaData />
      <InformationSection />
      <BeliebtesteSection />
      <Service />
      <MarineLife />
      <YoutubeSection />
      <Schools title="Similar Diving Schools" />
    </div>
  );
};

export default ProductDetail;
