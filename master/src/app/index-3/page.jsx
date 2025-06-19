import BannerThree from "@/components/BannerThree";
import HeaderThree from "@/components/HeaderThree";
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
      <section className='home-three crm-page'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* HeaderThree */}
        <HeaderThree />

        {/* BannerThree */}
        <BannerThree />
      </section>
    </AOSWrap>
  );
};

export default page;
