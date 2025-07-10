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

export async function generateMetadata() {
  return {
    title: "App-intigration | SassTech - Saas Software and IT Solution",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "About | SassTech",
      description:
        "Learn more about our SaaS software, team, features, and IT solutions.",
      url: "https://yourdomain.com/about",
      type: "website",
      images: [
        {
          url: "https://yourdomain.com/images/about-og.jpg",
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
