import Breadcrumb from "@/components/Breadcrumb";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import ShopInner from "@/components/ShopInner";
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
        <Breadcrumb title={"Shop Page"} />

        {/* ShopInner */}
        <ShopInner />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default page;
