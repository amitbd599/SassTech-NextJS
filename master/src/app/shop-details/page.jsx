import Breadcrumb from "@/components/Breadcrumb";
import FeaturedProductsInner from "@/components/FeaturedProductsInner";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import ProductTabsInner from "@/components/ProductTabsInner";
import ShopDetailsInner from "@/components/ShopDetailsInner";
import TaskManagementOne from "@/components/TaskManagementOne";
import TopHeaderOne from "@/components/TopHeaderOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title:
    "SassTech - Saas Software and IT Solution Multipurpose NEXT JS Template",
  description: "IT Solution, Sass and Multipurpose NEXT JS Template.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='heading-black'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* Top Header One */}
        <TopHeaderOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* Breadcrumb */}
        <Breadcrumb title={"Shop Details"} />

        {/* ShopDetailsInner */}
        <ShopDetailsInner />

        {/* ProductTabsInner */}
        <ProductTabsInner />

        {/* FeaturedProductsInner */}
        <FeaturedProductsInner />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default page;
