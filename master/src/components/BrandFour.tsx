"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const BrandFour: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 7 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 300,
        settings: { slidesToShow: 2 },
      },
    ],
  };
  return (
    <div className='brand-three'>
      <div className='container'>
        <div
          className='text-center tw-mb-16'
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          data-aos-duration={1000}
        >
          <h4 className='mb-0 fw-bold line-clamp-1 font-caveat'>
            Loved by next-gen B2B <span className='text-orange'>SaaS</span>{" "}
            companies.....
          </h4>
        </div>
        <div className='brand-three-slider swiper left-right-gradient gradient-width-200 position-relative'>
          <Slider {...settings} className='swiper-wrapper'>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div>
                <Image
                  width={105}
                  height={34}
                  src='/assets/images/thumbs/brand-three-img1.png'
                  alt='Logo'
                />
              </div>
            </div>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={700}
            >
              <div>
                <Image
                  width={105}
                  height={34}
                  src='/assets/images/thumbs/brand-three-img2.png'
                  alt='Logo'
                />
              </div>
            </div>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={800}
            >
              <div>
                <Image
                  width={105}
                  height={16}
                  src='/assets/images/thumbs/brand-three-img3.png'
                  alt='Logo'
                />
              </div>
            </div>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div>
                <Image
                  width={75}
                  height={26}
                  src='/assets/images/thumbs/brand-three-img4.png'
                  alt='Logo'
                />
              </div>
            </div>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={700}
            >
              <div>
                <Image
                  width={83}
                  height={24}
                  src='/assets/images/thumbs/brand-three-img5.png'
                  alt='Logo'
                />
              </div>
            </div>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={800}
            >
              <div>
                <Image
                  width={121}
                  height={34}
                  src='/assets/images/thumbs/brand-three-img6.png'
                  alt='Logo'
                />
              </div>
            </div>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div>
                <Image
                  width={90}
                  height={22}
                  src='/assets/images/thumbs/brand-three-img7.png'
                  alt='Logo'
                />
              </div>
            </div>
            <div
              className='swiper-slide d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={700}
            >
              <div>
                <Image
                  width={83}
                  height={24}
                  src='/assets/images/thumbs/brand-three-img5.png'
                  alt='Logo'
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrandFour;
