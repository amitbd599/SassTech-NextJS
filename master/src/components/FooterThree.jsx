import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterThree = () => {
  return (
    <section className='footer-three bg-pink-more-light bg-pink-more-light'>
      <div className='py-120'>
        <div className='container'>
          <div className='row gy-5'>
            <div
              className='col-xl-3 col-sm-4 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div>
                <h5 className='fw-medium tw-mb-8 splitTextStyleOne'>
                  Collaborate
                </h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Partners Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      HR Partner Program
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='col-xl-2 col-sm-4 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={700}
            >
              <div>
                <h5 className='fw-medium tw-mb-8 splitTextStyleOne'>
                  My account
                </h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Customer Success
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Talk an Expert
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='col-xl-2 col-sm-4 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div>
                <h5 className='fw-medium tw-mb-8 splitTextStyleOne'>Service</h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      AI Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Data Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text-neutral-600 hover-text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9 fw-bold'
                    >
                      Software Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='col-xl-5 col-lg-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              <div className='ps-xl-5'>
                <Link
                  href='/'
                  className='link hover--translate-y-1 active--translate-y-scale-9 tw-mb-10'
                >
                  <Image
                    width={150}
                    height={30}
                    src='/assets/images/logo/logo-three.png'
                    alt='tech'
                  />
                </Link>
                <form
                  action='#'
                  className='d-flex flex-md-row flex-column tw-gap-5 form-submit'
                >
                  <div className='position-relative flex-grow-1'>
                    <input
                      type='email'
                      className='tw-h-14 tw-rounded-lg bg-white tw-ps-12 border border-transparent focus-border-main-600 text-heading focus-outline-0 w-100 tw-pe-6'
                      placeholder='Email Address'
                      required=''
                    />
                    <span className='text-heading tw-text-lg position-absolute top-50 tw-start-0 tw--translate-y-50 tw-ms-5 d-flex'>
                      <i className='ph ph-envelope-simple' />
                    </span>
                  </div>
                  <button
                    type='submit'
                    className='hover-black btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-2 group active--translate-y-2 fw-semibold flex-shrink-0 hover--translate-y-1 active--translate-y-scale-9'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Sign Up</span>
                    <span className='text-white tw-text-sm tw-rounded d-flex justify-content-center align-items-center position-relative group-hover-text-main-600 tw-duration-500'>
                      <i className='ph-bold ph-caret-right' />
                    </span>
                  </button>
                </form>
                <p className='text-heading fw-semibold tw-mt-9'>
                  By subscribing, you're accept{" "}
                  <Link
                    href='#'
                    className='text-heading text-decoration-underline hover-text-main-600 hover--translate-y-1 active--translate-y-scale-9'
                  >
                    {" "}
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className='container'>
        {/* bottom Footer */}
        <div className='border-top border-neutral-200 border-0 tw-py-8'>
          <div className='container container-two'>
            <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
              <p className='text-heading text-line-1 fw-semibold'>
                © {new Date().getFullYear()}{" "}
                <Link
                  href='https://themeforest.net/user/webnextpro'
                  className='fw-bold text-gradient-teal hover-underline hover--translate-y-1 active--translate-y-scale-9'
                >
                  WowTheme7
                </Link>
                - IT Services. All rights reserved.
              </p>
              <div className='d-flex align-items-center tw-gap-6'>
                <Link
                  href='#'
                  className='text-neutral-600 fw-semibold hover-text-heading hover-text-neutral-900 hover-underline hover--translate-y-1 active--translate-y-scale-9'
                >
                  Faqs
                </Link>
                <Link
                  href='#'
                  className='text-neutral-600 fw-semibold hover-text-heading hover-text-neutral-900 hover-underline hover--translate-y-1 active--translate-y-scale-9'
                >
                  Setting
                </Link>
                <Link
                  href='#'
                  className='text-neutral-600 fw-semibold hover-text-heading hover-text-neutral-900 hover-underline hover--translate-y-1 active--translate-y-scale-9'
                >
                  Privacy
                </Link>
                <Link
                  href='#'
                  className='text-neutral-600 fw-semibold hover-text-heading hover-text-neutral-900 hover-underline hover--translate-y-1 active--translate-y-scale-9'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom End */}
    </section>
  );
};

export default FooterThree;
