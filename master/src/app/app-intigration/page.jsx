import AppIntegrationBreadcrumb from "@/components/AppIntegrationBreadcrumb";
import CounterUpThree from "@/components/CounterUpThree";
import DrivenSectionTwo from "@/components/DrivenSectionTwo";
import FaqTwo from "@/components/FaqTwo";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import SeamlessIntegration from "@/components/SeamlessIntegration";
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

        {/* AppIntegrationBreadcrumb */}
        <AppIntegrationBreadcrumb />

        {/* SeamlessIntegration */}
        <SeamlessIntegration />

        {/* CounterUpThree */}
        <CounterUpThree />

        {/* DrivenSectionTwo */}
        <DrivenSectionTwo />

        {/* FaqTwo */}
        <FaqTwo />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default page;
