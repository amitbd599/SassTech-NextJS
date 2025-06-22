import React from "react";

const AboutThree = () => {
  return (
    <section className='about-two py-120 position-relative z-1 overflow-hidden'>
      <img
        src='assets/images/bg/mash-gradient-bg3.png'
        alt='Gradient'
        className='position-absolute tw-start-0 top-0 z-n1'
      />
      <div className='container'>
        <div className='row gy-4 flex-wrap-reverse'>
          <div className='col-lg-6'>
            <div className='position-relative'>
              <div className='tw-ps-14 position-relative'>
                <img
                  src='assets/images/thumbs/about-four-thumb-1.png'
                  alt='Thumb'
                  className='w-100'
                />
                <img
                  src='assets/images/shapes/revenue-shape.png'
                  alt=''
                  className='flower animate__wobble__two position-absolute tw-start-0 bottom-100 tw--m-24-px z-n1'
                />
              </div>
              <div className='position-absolute bottom-0 tw-start-0 tw-mb-6'>
                <img
                  src='assets/images/thumbs/about-four-thumb-3.png'
                  alt='Thumb'
                  className='d-sm-block d-none tw-mb-4 animated-upDown'
                />
                <img
                  src='assets/images/thumbs/about-four-thumb-2.png'
                  alt='Thumb'
                  className='d-block common-shadow-twentyFour tw-rounded-2xl animated-upDown animation-delay-1'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='ps-xl-5'>
              <div className='tw-mb-10'>
                <h4 className='tw-mb-2 fw-bold line-clamp-1 font-caveat text-capitalize text-crm'>
                  with the world's favorite CRM
                </h4>
                <h2 className='splitTextStyleOne text-heading text-capitalize'>
                  improve <span className='text-crm'>customer</span>
                  relationships today
                </h2>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                  Sassly-CRM in the past allowing you to focus more on your
                  business simply enjoy your newfound legal time to reflect
                  leaving pen
                </p>
              </div>
              <div className='accordion common-accordion' id='accordionExample'>
                <div
                  className='accordion-item tw-px-40-px tw-rounded-xl section-bg-one border-0 tw-mb-6'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <h5 className='accordion-header'>
                    <button
                      className='accordion-button tw-py-6 shadow-none px-0 bg-transparent h5 collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                      data-img='assets/images/thumbs/faq-thumb2.png'
                    >
                      Automate everything
                    </button>
                  </h5>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body ps-0 pt-0 pe-0 tw-pb-6'>
                      <p className='text-neutral-500'>
                        ERP provides a complete leave management system for your
                        HR. Upcoming holidays and remaining leave balances.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-px-40-px tw-rounded-xl section-bg-one border-0 tw-mb-6'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <h5 className='accordion-header'>
                    <button
                      className='accordion-button tw-py-6 shadow-none px-0 bg-transparent h5'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                      data-img='assets/images/thumbs/faq-thumb1.png'
                    >
                      Deploy AI
                    </button>
                  </h5>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body ps-0 pt-0 pe-0 tw-pb-6'>
                      <p className='text-neutral-500'>
                        ERP provides a complete leave management system for your
                        HR. Upcoming holidays and remaining leave balances.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-px-40-px tw-rounded-xl section-bg-one border-0 tw-mb-6'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <h5 className='accordion-header'>
                    <button
                      className='accordion-button tw-py-6 shadow-none px-0 bg-transparent h5 collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                      data-img='assets/images/thumbs/faq-thumb3.png'
                    >
                      Powerful reporting
                    </button>
                  </h5>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body ps-0 pt-0 pe-0 tw-pb-6'>
                      <p className='text-neutral-500'>
                        ERP provides a complete leave management system for your
                        HR. Upcoming holidays and remaining leave balances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
