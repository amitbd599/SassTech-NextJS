import BannerTwo from "@/components/BannerTwo";
import HeaderTwo from "@/components/HeaderTwo";
import SearchDomainOne from "@/components/SearchDomainOne";
import TopHeaderTwo from "@/components/TopHeaderTwo";
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
      </section>
    </AOSWrap>
  );
};

export default page;
