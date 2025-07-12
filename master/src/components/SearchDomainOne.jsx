"use client";
import React, { useState } from "react";

const SearchDomainOne = () => {
  const [activeTab, setActiveTab] = useState("FindNewDomain");
  const tabs = [
    {
      id: "FindNewDomain",
      label: "Find New Domain",
    },
    {
      id: "GeneratedomainusingAI",
      label: "Generate domain using AI",
    },
  ];
  return (
    <section
      className='search-domain position-relative z-1 tw--mt-170-px'
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration={800}
    >
      <img
        src='assets/images/shapes/hand-thumb.png'
        alt='Hand thumb'
        className='hand-thumb left-right-animation position-absolute tw-start-0 top-0 tw-mt-15'
      />
      <div className='container'>
        <div className='bg-white common-shadow-six tw-pt-10 tw-pb-16 tw-px-88-px'>
          <h3 className='text-center tw-mb-4 text-capitalize splitTextStyleOne'>
            Search and buy a{" "}
            <span className='text-yellow font-dm-serif fst-italic fw-normal'>
              domain
            </span>{" "}
            in minutes
          </h3>
          <div
            className='text-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <ul
              className='animate-background-wrapper z-1 position-relative nav nav-pills active-text-white d-inline-flex border border-neutral-200 rounded-pill tw-mb-6'
              role='tablist'
            >
              <li className='background inner' />

              {tabs.map((tab) => (
                <li
                  className='nav-item flex-grow-1'
                  role='presentation'
                  key={tab.id}
                >
                  <button
                    type='button'
                    className={`nav-link w-100 active-scale-094 rounded-pill tw-px-6 tw-py-305 bg-transparent fw-semibold text-heading hover-text-main-600 h-100 line-clamp-1 ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    role='tab'
                    aria-selected={activeTab === tab.id}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-FindNewDomain'
              role='tabpanel'
              aria-labelledby='pills-FindNewDomain-tab'
              tabIndex={0}
            >
              <div className='select-domain-wrapper '>
                <form
                  action='#'
                  className='d-flex tw-gap-6 flex-column flex-sm-row'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <div className='position-relative flex-grow-1'>
                    <input
                      type='text'
                      className='tw-py-405 tw-px-705 tw-pe-100-px bg-neutral-100 tw-rounded-xl border-transparent placeholder-neutral-600 placeholder-18-px w-100'
                      placeholder='Enter your desire domain name'
                    />
                    <select className='select-domain form-control form-select w-auto border-0 tw-py-1 tw-pe-305 shadow-none form-select-arrow-end position-absolute tw-end-0 top-50 translate-middle-y bg-transparent tw-me-705 fw-semibold'>
                      <option value='.com'>.com</option>
                      <option value='.cloud'>.cloud</option>
                      <option value='.shop'>.shop</option>
                      <option value='.online'>.online</option>
                      <option value='.info'>.info</option>
                    </select>
                  </div>
                  <button
                    type='button'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-15 tw-py-505 fw-semibold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Search</span>
                  </button>
                </form>
                <div
                  className='overflow-x-max-lg-auto scroll-sm scroll-sm-horizontal pb-sm-0'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <div className='tw-mt-6 d-grid grid-col-5 min-w-max tw-pb-1'>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end border-start'
                      data-domain='.com'
                    >
                      <img
                        src='assets/images/thumbs/domain-img1.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.cloud'
                    >
                      <img
                        src='assets/images/thumbs/domain-img2.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $14.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.shop'
                    >
                      <img
                        src='assets/images/thumbs/domain-img3.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.online'
                    >
                      <img
                        src='assets/images/thumbs/domain-img4.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.info'
                    >
                      <img
                        src='assets/images/thumbs/domain-img5.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className='text-center text-heading fw-medium tw-mt-8'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  Already bought a domain?
                  <a
                    href='#'
                    className='fw-bold text-decoration-underline text-heading hover-text-main-600'
                  >
                    Transfer it?
                  </a>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-GeneratedomainusingAI'
              role='tabpanel'
              aria-labelledby='pills-GeneratedomainusingAI-tab'
              tabIndex={0}
            >
              <div className='select-domain-wrapper '>
                <form
                  action='#'
                  className='d-flex tw-gap-6 flex-column flex-sm-row'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <div className='position-relative flex-grow-1'>
                    <input
                      type='text'
                      className='tw-py-405 tw-px-705 tw-pe-100-px bg-neutral-100 tw-rounded-xl border-transparent placeholder-neutral-600 placeholder-18-px w-100'
                      placeholder='Enter your desire domain name'
                      required=''
                    />
                    <select className='select-domain form-control form-select w-auto border-0 tw-py-1 tw-pe-305 shadow-none form-select-arrow-end position-absolute tw-end-0 top-50 translate-middle-y bg-transparent tw-me-705 fw-semibold'>
                      <option value='.com'>.com</option>
                      <option value='.cloud'>.cloud</option>
                      <option value='.shop'>.shop</option>
                      <option value='.online'>.online</option>
                      <option value='.info'>.info</option>
                    </select>
                  </div>
                  <button
                    type='submit'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-15 tw-py-505 fw-semibold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Search</span>
                  </button>
                </form>
                <div
                  className='overflow-x-max-lg-auto scroll-sm scroll-sm-horizontal pb-sm-0'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <div className='tw-mt-6 d-grid grid-col-5 min-w-max tw-pb-1'>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end border-start'
                      data-domain='.com'
                    >
                      <img
                        src='assets/images/thumbs/domain-img1.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.cloud'
                    >
                      <img
                        src='assets/images/thumbs/domain-img2.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $14.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.shop'
                    >
                      <img
                        src='assets/images/thumbs/domain-img3.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.online'
                    >
                      <img
                        src='assets/images/thumbs/domain-img4.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.info'
                    >
                      <img
                        src='assets/images/thumbs/domain-img5.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className='text-center text-heading fw-medium tw-mt-8'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  Already bought a domain?
                  <a
                    href='#'
                    className='fw-bold text-decoration-underline text-heading hover-text-main-600'
                  >
                    Transfer it?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='text-center tw-mt-11 text-heading fw-medium d-flex align-items-center tw-gap-4 justify-content-center flex-wrap'
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          data-aos-duration={800}
        >
          <span className=''>
            Our Customers say <span className='fw-bold tw-ms-2'>Great</span>{" "}
          </span>
          <img src='assets/images/icons/ratings.svg' alt='' className='' />
          <span className=''>4.1 out of 5 based on 16,158 reviews</span>
          <div className='d-flex align-items-center tw-gap-05'>
            <img src='assets/images/icons/trustpilot-star.svg' alt='' />
            <span className='fw-bold'>Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchDomainOne;
