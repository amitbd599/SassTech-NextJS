import Breadcrumb from "@/components/Breadcrumb";
import CheckoutInner from "@/components/CheckoutInner";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import TaskManagementOne from "@/components/TaskManagementOne";
import TopHeaderOne from "@/components/TopHeaderOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export async function generateMetadata() {
  return {
    title: "CheckOut | SassTech - Saas Software and IT Solution",
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

        {/* Breadcrumb */}
        <Breadcrumb title={"Checkout"} />

        {/* CheckoutInner */}
        <CheckoutInner />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default page;
