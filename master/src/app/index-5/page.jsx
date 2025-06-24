import AOSWrap from "@/helper/AOSWrap";
import HeaderFive from "@/components/HeaderFive";
import CustomCursor from "@/helper/CustomCursor";
import TopHeaderThree from "@/components/TopHeaderThree";
import BannerFive from "@/components/BannerFive";
import BrandFive from "@/components/BrandFive";
import WorkProcessOne from "@/components/WorkProcessOne";
import OfferTwo from "@/components/OfferTwo";
import AboutFeaturesOne from "@/components/AboutFeaturesOne";
import CounterUpTwo from "@/components/CounterUpTwo";
import DownloadAppOne from "@/components/DownloadAppOne";
import AppScreenshotOne from "@/components/AppScreenshotOne";
import TestimonialsFive from "@/components/TestimonialsFive";
import PricingPlanThree from "@/components/PricingPlanThree";
import FooterFive from "@/components/FooterFive";

export const metadata = {
  title:
    "SassTech - Saas Software and IT Solution Multipurpose NEXT JS Template",
  description: "IT Solution, Sass and Multipurpose NEXT JS Template.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='home-five'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* TopHeaderThree */}
        <TopHeaderThree />

        {/* HeaderFive */}
        <HeaderFive />

        {/* BannerFive */}
        <BannerFive />

        {/* BrandFive */}
        <BrandFive />

        {/* WorkProcessOne */}
        <WorkProcessOne />

        {/* OfferTwo */}
        <OfferTwo />

        {/* AboutFeaturesOne */}
        <AboutFeaturesOne />

        {/* CounterUpTwo */}
        <CounterUpTwo />

        {/* DownloadAppOne */}
        <DownloadAppOne />

        {/* AppScreenshotOne */}
        <AppScreenshotOne />

        {/* TestimonialsFive */}
        <TestimonialsFive />

        {/* PricingPlanThree */}
        <PricingPlanThree />

        {/* FooterFive */}
        <FooterFive />
      </section>
    </AOSWrap>
  );
};

export default page;
