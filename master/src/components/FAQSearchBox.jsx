import React from "react";

const FAQSearchBox = () => {
  return (
    <section className='pt-120 section-bg-two pb-120 overflow-hidden'>
      <div className='container max-w-1290-px'>
        <div className='row justify-content-center'>
          <div className='col-xl-8'>
            <div className='text-center'>
              <h3 className='tw-mb-6'>Hello, what can we help you find?</h3>
              <p className='fw-medium text-neutral-500'>
                Docly is a fully featured knowledge base theme for WordPress.
              </p>
              <form action='#' className='position-relative tw-mt-11'>
                <input
                  type='text'
                  className='tw-px-10 tw-py-705 bg-white rounded-pill border-transparent focus-border-main-600 focus-outline-0 w-100 tw-pe-200-px common-shadow-seventeen'
                  placeholder='Search What You Want To Know'
                />
                <button
                  type='submit'
                  className='btn hover-black btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-2 group active--translate-y-2 fw-semibold flex-shrink-0 tw-py-6 tw-px-12 rounded-pill position-sm-in-box'
                  data-block='button'
                >
                  <span className='button__label'>Search</span>
                </button>
              </form>
              <div className='d-inline-flex align-items-center tw-gap-6 tw-mt-8 flex-wrap'>
                <span className='fw-semibold tw-text-lg text-heading'>
                  Popular:
                </span>
                <div className='d-inline-flex align-items-center tw-gap-4 flex-wrap'>
                  <button
                    type='button'
                    className='tw-px-405 tw-py-105 bg-white tw-rounded-md text-neutral-500 tw-text-sm bg-white common-shadow-eighteen hover-bg-main-600 hover-text-white tw-transition tw-duration-200 fw-medium'
                  >
                    Coding
                  </button>
                  <button
                    type='button'
                    className='tw-px-405 tw-py-105 bg-white tw-rounded-md text-neutral-500 tw-text-sm bg-white common-shadow-eighteen hover-bg-main-600 hover-text-white tw-transition tw-duration-200 fw-medium'
                  >
                    Traveling
                  </button>
                  <button
                    type='button'
                    className='tw-px-405 tw-py-105 bg-white tw-rounded-md text-neutral-500 tw-text-sm bg-white common-shadow-eighteen hover-bg-main-600 hover-text-white tw-transition tw-duration-200 fw-medium'
                  >
                    aeroplane
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSearchBox;
