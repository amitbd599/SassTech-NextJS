import AutomationOne from "@/components/AutomationOne";
import BannerThree from "@/components/BannerThree";
import BrandThree from "@/components/BrandThree";
import DistractionOne from "@/components/DistractionOne";
import FeaturesThree from "@/components/FeaturesThree";
import FooterThree from "@/components/FooterThree";
import HeaderThree from "@/components/HeaderThree";
import PlanExecuteOne from "@/components/PlanExecuteOne";
import PricingPlanTwo from "@/components/PricingPlanTwo";
import TaskManagementOne from "@/components/TaskManagementOne";
import TaskManagerOne from "@/components/TaskManagerOne";
import TestimonialsThree from "@/components/TestimonialsThree";
import WorkPlaceOne from "@/components/WorkPlaceOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export async function generateMetadata() {
  return {
    title: "Home - 3 | SassTech - Saas Software and IT Solution",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "About | SassTech",
      description:
        "Learn more about our SaaS software, team, features, and IT solutions.",
      url: "https://nextjs.sasstech.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.sasstech.webnextpro.com/images/about-og.jpg",
          width: 1200,
          height: 630,
          alt: "About SassTech",
        },
      ],
    },
  };
}

const page = () => {
  return (
    <AOSWrap>
      <section className='home-three crm-page'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* HeaderThree */}
        <HeaderThree />

        {/* BannerThree */}
        <BannerThree />

        {/* BrandThree */}
        <BrandThree />

        {/* FeaturesThree */}
        <FeaturesThree />

        {/* WorkPlaceOne */}
        <WorkPlaceOne />

        {/* AutomationOne */}
        <AutomationOne />

        {/* TaskManagerOne */}
        <TaskManagerOne />

        {/* PlanExecuteOne */}
        <PlanExecuteOne />

        {/* TestimonialsThree */}
        <TestimonialsThree />

        {/* DistractionOne */}
        <DistractionOne />

        {/* PricingPlanTwo */}
        <PricingPlanTwo />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default page;
