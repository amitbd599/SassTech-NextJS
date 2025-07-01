import AboutTwo from "@/components/AboutTwo";
import BannerTwo from "@/components/BannerTwo";
import BrandMarketingOne from "@/components/BrandMarketingOne";
import DegreeViewOne from "@/components/DegreeViewOne";
import FaqTwo from "@/components/FaqTwo";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import HostingPlanOne from "@/components/HostingPlanOne";
import PricingPlanOne from "@/components/PricingPlanOne";
import SearchDomainOne from "@/components/SearchDomainOne";
import SearchDomainTwo from "@/components/SearchDomainTwo";
import ServicesOne from "@/components/ServicesOne";
import TopHeaderTwo from "@/components/TopHeaderTwo";
import WebsiteOwnerOne from "@/components/WebsiteOwnerOne";
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
      <section className='home-two'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* TopHeaderTwo */}
        <TopHeaderTwo />

        {/* HeaderTwo */}
        <HeaderTwo />

        {/* BannerTwo */}
        <BannerTwo />

        {/* SearchDomainOne */}
        <SearchDomainOne />

        {/* AboutTwo */}
        <AboutTwo />

        {/* HostingPlanOne */}
        <HostingPlanOne />

        {/* DegreeViewOne */}
        <DegreeViewOne />

        {/* SearchDomainTwo */}
        <SearchDomainTwo />

        {/* PricingPlanOne */}
        <PricingPlanOne />

        {/* ServicesOne */}
        <ServicesOne />

        {/* BrandMarketingOne */}
        <BrandMarketingOne />

        {/* WebsiteOwnerOne */}
        <WebsiteOwnerOne />

        {/* FaqTwo */}
        <FaqTwo />

        {/* FooterTwo */}
        <FooterTwo />
      </section>
    </AOSWrap>
  );
};

export default page;
