import React from "react";

const WorkPlaceOne = () => {
  return (
    <section className='workplace-team py-120 gradient-bg-five position-relative z-1'>
      <img
        src='assets/images/shapes/curve-way.png'
        alt='Shape'
        className='position-absolute tw-start-0 bottom-0 z-n1 w-100'
      />
      <div className='container'>
        <div className='tw-mb-8 text-center max-w-570-px mx-auto'>
          <div
            className='bg-white tw-py-3 tw-px-305 rounded-pill fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max border border-spring-green'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='text-gradient-teal'>
              Up to <span className='text-yellow text-stroke-yellow'>70%</span>{" "}
              off managed cloud hosting
            </div>
          </div>
          <h2 className='splitTextStyleOne text-white'>
            Essential for
            <span className='font-dm-serif fst-italic fw-normal'>
              workplaces.
            </span>
            Great for any team.
          </h2>
          <p className='splitTextStyleOne text-neutral-300 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
            Sassly-CRM in the past allowing you to focus more on your business
            simply enjoy your newfound legal time to reflect leaving pen
          </p>
        </div>
        <div
          className='border border-white-01 tw-rounded-2xl p-sm-4'
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          data-aos-duration={900}
        >
          <div
            className='background-img bg-img tw-rounded-2xl bg-position-top-center'
            data-background-image='assets/images/shapes/dashboard-screen.png'
          >
            <div className='tw-p-7 tw-pt-16 d-flex tw-gap-13 flex-lg-row flex-column'>
              {/* Sidebar Start */}
              <div className='bg-neutral-100 tw-rounded-2xl tw-p-4 max-w-330-px flex-shrink-0'>
                <div className='tw-ps-4 tw-pt-2 tw-mb-10 tw-pb-10'>
                  <a href='index.html' className=''>
                    <img src='assets/images/logo/logo-two.png' alt='Logo' />
                  </a>
                </div>
                <div className=''>
                  <div
                    className='nav flex-column gradient-bg nav-pills'
                    id='v-pills-tab'
                    role='tablist'
                    aria-orientation='vertical'
                  >
                    <button
                      className='nav-link animation-item tw-py-505 tw-px-9 tw-text-lg fw-bold text-heading tw-rounded-xl d-flex align-items-center tw-gap-4 active'
                      id='v-pills-home-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-home'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-home'
                      aria-selected='true'
                    >
                      <span className='icon active-white animate__heartBeat'>
                        <img
                          src='assets/images/icons/workplace-tab-icon1.svg'
                          alt='Icon'
                        />
                      </span>
                      All Teams
                    </button>
                    <button
                      className='nav-link animation-item tw-py-505 tw-px-9 tw-text-lg fw-bold text-heading tw-rounded-xl d-flex align-items-center tw-gap-4'
                      id='v-pills-profile-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-profile'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-profile'
                      aria-selected='false'
                    >
                      <span className='icon active-white animate__heartBeat'>
                        <img
                          src='assets/images/icons/workplace-tab-icon2.svg'
                          alt='Icon'
                        />
                      </span>
                      Security
                    </button>
                    <button
                      className='nav-link animation-item tw-py-505 tw-px-9 tw-text-lg fw-bold text-heading tw-rounded-xl d-flex align-items-center tw-gap-4'
                      id='v-pills-disabled-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-disabled'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-disabled'
                      aria-selected='false'
                    >
                      <span className='icon active-white animate__heartBeat'>
                        <img
                          src='assets/images/icons/workplace-tab-icon3.svg'
                          alt='Icon'
                        />
                      </span>
                      Technology
                    </button>
                    <button
                      className='nav-link animation-item tw-py-505 tw-px-9 tw-text-lg fw-bold text-heading tw-rounded-xl d-flex align-items-center tw-gap-4'
                      id='v-pills-messages-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-messages'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-messages'
                      aria-selected='false'
                    >
                      <span className='icon active-white animate__heartBeat'>
                        <img
                          src='assets/images/icons/workplace-tab-icon4.svg'
                          alt='Icon'
                        />
                      </span>
                      Infrastructure
                    </button>
                    <button
                      className='nav-link animation-item tw-py-505 tw-px-9 tw-text-lg fw-bold text-heading tw-rounded-xl d-flex align-items-center tw-gap-4'
                      id='v-pills-settings-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#v-pills-settings'
                      type='button'
                      role='tab'
                      aria-controls='v-pills-settings'
                      aria-selected='false'
                    >
                      <span className='icon active-white animate__heartBeat'>
                        <img
                          src='assets/images/icons/workplace-tab-icon5.svg'
                          alt='Icon'
                        />
                      </span>
                      Engineering
                    </button>
                  </div>
                </div>
              </div>
              {/* Sidebar End */}
              {/* Contents Start */}
              <div className='flex-grow-1'>
                <div className='tab-content' id='v-pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='v-pills-home'
                    role='tabpanel'
                    aria-labelledby='v-pills-home-tab'
                    tabIndex={0}
                  >
                    <div className='tw-rounded-2xl'>
                      <img
                        src='assets/images/thumbs/workplace-tab-thumb.png'
                        alt='Thumbs'
                        className='w-100 h-100'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-profile'
                    role='tabpanel'
                    aria-labelledby='v-pills-profile-tab'
                    tabIndex={0}
                  >
                    <div className='tw-rounded-2xl'>
                      <img
                        src='assets/images/thumbs/workplace-tab-thumb.png'
                        alt='Thumbs'
                        className='w-100 h-100'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-disabled'
                    role='tabpanel'
                    aria-labelledby='v-pills-disabled-tab'
                    tabIndex={0}
                  >
                    <div className='tw-rounded-2xl'>
                      <img
                        src='assets/images/thumbs/workplace-tab-thumb.png'
                        alt='Thumbs'
                        className='w-100 h-100'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-messages'
                    role='tabpanel'
                    aria-labelledby='v-pills-messages-tab'
                    tabIndex={0}
                  >
                    <div className='tw-rounded-2xl'>
                      <img
                        src='assets/images/thumbs/workplace-tab-thumb.png'
                        alt='Thumbs'
                        className='w-100 h-100'
                      />
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-settings'
                    role='tabpanel'
                    aria-labelledby='v-pills-settings-tab'
                    tabIndex={0}
                  >
                    <div className='tw-rounded-2xl'>
                      <img
                        src='assets/images/thumbs/workplace-tab-thumb.png'
                        alt='Thumbs'
                        className='w-100 h-100'
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Contents End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPlaceOne;
