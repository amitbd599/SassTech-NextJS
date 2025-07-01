"use client";
import Link from "next/link";
import CountUp from "react-countup";
const BannerOne = () => {
  return (
    <section className='banner tw-py-80-px overflow-hidden section-bg-three position-relative'>
      <img
        src='assets/images/shapes/sqaure_shape.png'
        alt='Shape'
        className='position-absolute top-0 tw-end-0 tw-me-12-percent'
      />
      <div className='container max-w-1400-px'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6'>
            <div className=''>
              <h1 className='splitTextStyleOne fw-light tw-leading-104'>
                <span className='d-inline-block '>Transform </span>{" "}
                <span className='d-inline-block fw-semibold'> Your </span>{" "}
                <span className='d-inline-block fw-semibold'>Business</span>{" "}
                <span className='d-inline-block fw-semibold'>Through</span>{" "}
                <span className='d-inline-block fw-semibold'>Strategic</span>{" "}
                <span className='d-inline-block'>IT Solutions</span>
              </h1>
              <p className='text-neutral-500 tw-text-lg max-w-500-px fw-medium tw-mt-8 splitTextStyleOne'>
                In today's competitive business, the demand for efficient and
                cost-effective IT solutions has never been more critical.
              </p>
              <div className='tw-mt-11 d-flex align-items-center tw-gap-42-px flex-wrap'>
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <Link
                    href='/register'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-sm-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Get Started</span>
                  </Link>
                </div>
                <div
                  className=''
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <div className='d-flex align-items-center tw-gap-4'>
                    <div className='d-flex align-items-center'>
                      <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2'>
                        <img
                          src='assets/images/thumbs/client-img1.png'
                          alt='Client Image'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px z-1'>
                        <img
                          src='assets/images/thumbs/client-img2.png'
                          alt='Client Image'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                      <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px'>
                        <img
                          src='assets/images/thumbs/client-img3.png'
                          alt='Client Image'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                    </div>
                    <span className='h5 counter'>
                      <CountUp delay={0} start={0} end={3} />
                      M+
                    </span>
                  </div>
                  <p className='fw-bold tw-text-sm font-heading text-heading tw-mt-2 counter'>
                    <CountUp delay={0} start={0} end={5000} />+ Client reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='tw-ps-98-px position-relative tw-pb-8'>
              <div className='position-relative z-1'>
                <img
                  src='assets/images/thumbs/banner-img.png'
                  alt=''
                  data-aos='zoom-in'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1000}
                />
              </div>
              {/* Review */}
              <div className='bg-white tw-rounded-3xl tw-p-6 max-w-218-px position-absolute tw-end-0 top-0 w-100 tw--mt-8-px tw--me-8-px common-shadow-two z-1'>
                <div className='d-inline-flex align-items-center tw-gap-1 bg-green tw-py-05 tw-px-3 rounded-pill position-absolute top-0 tw-end-0 tw--mt-12-px tw--me-12-px'>
                  <span className='text-white fw-bold tw-text-sm'>4.9</span>
                  <span className='text-white d-flex'>
                    <img src='assets/images/icons/star.svg' alt='' />
                  </span>
                </div>
                <img
                  src='assets/images/icons/ratings.svg'
                  alt=''
                  className=''
                />
                <div className='tw-mt-3 d-flex align-items-center justify-content-between max-w-154-px'>
                  <span className='tw-text-lg text-heading fw-semibold'>
                    Trust pilot
                  </span>
                  <img src='assets/images/icons/verified-icon.svg' alt='' />
                </div>
              </div>
              {/* Review */}
              {/* Experience */}
              <div
                className='bg-main-600 tw-p-12 tw-pe-6 d-inline-block tw-rounded-xl clip-path-one position-absolute bottom-0 tw-end-0 z-1 tw--me-70-px tw-mb-205'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={900}
              >
                <h2 className='text-white counter'>
                  $<CountUp delay={0} start={0} end={8} />+
                </h2>
                <span className='text-white'>Years Experience</span>
              </div>
              {/* Experience */}
              {/* Revenue */}
              <div
                className='bg-white-7 tw-py-6 tw-px-7 tw-rounded-2xl border border-white bg-blur-20 position-absolute bottom-0 tw-start-0 z-1 d-flex align-items-center tw-gap-8 common-shadow-two'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <img
                  src='assets/images/shapes/revenue-shape.png'
                  alt=''
                  className='flower animate__wobble__two position-absolute tw-end-100 bottom-100 tw--m-24-px z-n1'
                />
                <div className=''>
                  <div className='tab-content' id='pills-tabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='pills-Daily'
                      role='tabpanel'
                      aria-labelledby='pills-Daily-tab'
                      tabIndex={0}
                    >
                      <span className='tw-text-sm text-neutral-500 tw-mb-1 text-uppercase'>
                        Revenue
                      </span>
                      <h5 className='tw-mb-6 counter'>
                        $<CountUp delay={0} start={0} end={4820} />
                        .00
                      </h5>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-Weekly'
                      role='tabpanel'
                      aria-labelledby='pills-Weekly-tab'
                      tabIndex={0}
                    >
                      <span className='tw-text-sm text-neutral-500 tw-mb-1 text-uppercase'>
                        Revenue
                      </span>
                      <h5 className='tw-mb-6 counter'>
                        $<CountUp delay={0} start={0} end={2445} />
                        .00
                      </h5>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-Monthly'
                      role='tabpanel'
                      aria-labelledby='pills-Monthly-tab'
                      tabIndex={0}
                    >
                      <span className='tw-text-sm text-neutral-500 tw-mb-1 text-uppercase'>
                        Revenue
                      </span>
                      <h5 className='tw-mb-6 counter'>
                        $<CountUp delay={0} start={0} end={8221} />
                        .00
                      </h5>
                    </div>
                  </div>
                  <ul
                    className='nav nav-pills common-tab d-flex align-items-center tw-gap-205'
                    id='pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link bg-transparent hover--translate-y-1 tw-transition-all tw-duration-300 text-neutral-500 tw-text-sm fw-medium p-0 active'
                        id='pills-Daily-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-Daily'
                        type='button'
                        role='tab'
                        aria-controls='pills-Daily'
                        aria-selected='true'
                      >
                        Daily
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link bg-transparent hover--translate-y-1 tw-transition-all tw-duration-300 text-neutral-500 tw-text-sm fw-medium p-0'
                        id='pills-Weekly-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-Weekly'
                        type='button'
                        role='tab'
                        aria-controls='pills-Weekly'
                        aria-selected='false'
                      >
                        Weekly
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link bg-transparent hover--translate-y-1 tw-transition-all tw-duration-300 text-neutral-500 tw-text-sm fw-medium p-0'
                        id='pills-Monthly-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-Monthly'
                        type='button'
                        role='tab'
                        aria-controls='pills-Monthly'
                        aria-selected='false'
                      >
                        Monthly
                      </button>
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <img src='assets/images/thumbs/revenue-chart.png' alt='' />
                </div>
              </div>
              {/* Revenue */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
