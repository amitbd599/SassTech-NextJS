import AboutThree from "@/components/AboutThree";
import BannerFour from "@/components/BannerFour";
import BrandFour from "@/components/BrandFour";
import FeaturesFour from "@/components/FeaturesFour";
import HeaderFour from "@/components/HeaderFour";
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
      </section>
    </AOSWrap>
  );
};

export default page;
