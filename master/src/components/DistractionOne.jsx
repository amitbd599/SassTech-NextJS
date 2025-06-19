import React from "react";

const DistractionOne = () => {
  return (
    <section className='distraction'>
      <div className='container max-w-1290-px'>
        <div className='position-relative distraction__inner'>
          <div className='max-w-602-px w-100 text-center mx-auto position-absolute z-1 tw-start-50 translate-middle-x top-0 mt-5 pt-lg-5 pt-4'>
            <h2 className='splitTextStyleOne text-heading text-capitalize text-capitalize'>
              Avoid
              <span className='font-dm-serif fst-italic fw-normal text-gradient-teal'>
                distractions
              </span>
              with app integrations
            </h2>
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
          <div
            className='d-flex align-items-center justify-content-center tw-gap-7 position-absolute z-1 tw-start-50 translate-middle-x bottom-0 mb-2 w-100'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <a
              href='javascript:void(0)'
              className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-md tw-py-6 fw-bold'
              data-block='button'
            >
              <span className='button__flair' />
              <div className='d-flex align-items-center tw-gap-2 z-1'>
                <span className='button__label'>Start Free Trial</span>
                <span className='icon'>
                  <img
                    src='assets/images/icons/download-cloud-icon.png'
                    alt='Icon'
                  />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistractionOne;
