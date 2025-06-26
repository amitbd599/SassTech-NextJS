import React from "react";

const AppIntegrationBreadcrumb = () => {
  return (
    <section className='pt-120 section-bg-two pb-120'>
      <div className='container max-w-1290-px'>
        <div className='position-relative distraction__inner'>
          <div className='max-w-602-px w-100 text-center mx-auto position-absolute z-1 tw-start-50 translate-middle-x top-0 mt-5 pt-lg-5 pt-4'>
            <h3 className='splitTextStyleOne text-heading h1 text-capitalize text-capitalize'>
              App Integration
            </h3>
            <p className='text-neutral-500 tw-mt-5 splitTextStyleOne max-w-500-px mx-auto'>
              Create tasks with various custom statuses to focus more on your
              keep track of the progress of each why
            </p>
          </div>
          <div className=''>
            <img
              src='assets/images/shapes/net-shape.png'
              alt='Net Shape'
              data-aos='zoom-in'
              data-aos-duration={1500}
            />
          </div>
          <div className=''>
            <div className='distraction-icon one position-absolute z-1 animation-scalation'>
              <img
                src='assets/images/thumbs/distraction-icon1.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon two position-absolute z-1 animation-upDown'>
              <img
                src='assets/images/thumbs/distraction-icon2.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon three position-absolute z-1 animation-upDown animation-delay-1'>
              <img
                src='assets/images/thumbs/distraction-icon3.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon four position-absolute z-1 animation-upDown animation-delay-2'>
              <img
                src='assets/images/thumbs/distraction-icon4.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon five position-absolute z-1 animation-scalation animation-delay-1'>
              <img
                src='assets/images/thumbs/distraction-icon5.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon six position-absolute z-1 animation-scalation animation-delay-2'>
              <img
                src='assets/images/thumbs/distraction-icon6.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon seven position-absolute z-1'>
              <img
                src='assets/images/thumbs/distraction-icon7.png'
                alt='Icon Image'
                className=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegrationBreadcrumb;
