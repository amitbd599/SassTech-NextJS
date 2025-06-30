import AboutOne from "@/components/AboutOne";
import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
import BrandSliderOne from "@/components/BrandSliderOne";
import ChooseUsOne from "@/components/ChooseUsOne";
import CtaOne from "@/components/CtaOne";
import FAQOne from "@/components/FAQOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import MobileMenu from "@/components/MobileMenu___";
import OfferOne from "@/components/OfferOne";
import RoadmapOne from "@/components/RoadmapOne";
import ShowCaseOne from "@/components/ShowCaseOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import TopFeaturesOne from "@/components/TopFeaturesOne";
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
      {/* CustomCursor */}
      <CustomCursor />

      {/* Top Header One */}
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderOne />

      {/* TopFeaturesOne */}
      <TopFeaturesOne />

      {/* BannerOne */}
      <BannerOne />

      {/* BrandSliderOne */}
      <BrandSliderOne />

      {/* AboutOne */}
      <AboutOne />

      {/* RoadmapOne */}
      <RoadmapOne />

      {/* OfferOne */}
      <OfferOne />

      {/* FAQOne */}
      <FAQOne />

      {/* ChooseUsOne */}
      <ChooseUsOne />

      {/* ShowCaseOne */}
      <ShowCaseOne />

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* Wrapper two section */}
      <div className='position-relative z-1'>
        <img
          src='assets/images/shapes/shape-image.png'
          alt='Shape'
          className='position-absolute w-100 tw-start-0 bottom-0 z-n1'
        />
        {/* BlogOne */}
        <BlogOne />

        {/* CtaOne */}
        <CtaOne />
      </div>

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default page;
