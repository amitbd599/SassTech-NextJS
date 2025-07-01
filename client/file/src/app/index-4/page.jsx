import AboutFour from "@/components/AboutFour";
import AboutThree from "@/components/AboutThree";
import BannerFour from "@/components/BannerFour";
import BrandFour from "@/components/BrandFour";
import CounterUpOne from "@/components/CounterUpOne";
import CRMOne from "@/components/CRMOne";
import DrivenSectionOne from "@/components/DrivenSectionOne";
import FeaturesFour from "@/components/FeaturesFour";
import FooterFour from "@/components/FooterFour";
import HeaderFour from "@/components/HeaderFour";
import IntegrateAppsOne from "@/components/IntegrateAppsOne";
import TestimonialsFour from "@/components/TestimonialsFour";
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
      <section className='home-crm heading-black'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* HeaderFour */}
        <HeaderFour />

        {/* BannerFour */}
        <BannerFour />

        {/* BrandFour */}
        <BrandFour />

        {/* AboutThree */}
        <AboutThree />

        {/* FeaturesFour */}
        <FeaturesFour />

        {/* AboutFour */}
        <AboutFour />

        {/* CRMOne */}
        <CRMOne />

        {/* TestimonialsFour */}
        <TestimonialsFour />

        {/* IntegrateAppsOne */}
        <IntegrateAppsOne />

        {/* CounterUpOne */}
        <CounterUpOne />

        {/* DrivenSectionOne */}
        <DrivenSectionOne />

        {/* FooterFour */}
        <FooterFour />
      </section>
    </AOSWrap>
  );
};

export default page;
