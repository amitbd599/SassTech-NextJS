import Breadcrumb from "@/components/Breadcrumb";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import PricingPlanInner from "@/components/PricingPlanInner";
import PricingPlanInnerThree from "@/components/PricingPlanInnerThree";
import PricingPlanInnerTwo from "@/components/PricingPlanInnerTwo";
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
        <Breadcrumb title={"Pricing Package"} />

        {/* PricingPlanInner */}
        <PricingPlanInner />

        {/* PricingPlanInnerTwo */}
        <PricingPlanInnerTwo />

        {/* PricingPlanInnerThree */}
        <PricingPlanInnerThree />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default page;
