import React from "react";

const ProductTabsInner = () => {
  return (
    <section className='py-120 section-bg-two'>
      <div className='container'>
        <div className=''>
          <ul
            className='nav nav-pills style-border tw-mb-11 tw-gap-9 flex-wrap'
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link tw-px-6 tw-py-3 bg-white text-heading fw-bold tw-text-sm border border-white text-uppercase tw-rounded-lg active'
                id='pills-ProductDetails-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-ProductDetails'
                type='button'
                role='tab'
                aria-controls='pills-ProductDetails'
                aria-selected='true'
              >
                Product Details
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link tw-px-6 tw-py-3 bg-white text-heading fw-bold tw-text-sm border border-white text-uppercase tw-rounded-lg'
                id='pills-additionalInformation-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-additionalInformation'
                type='button'
                role='tab'
                aria-controls='pills-additionalInformation'
                aria-selected='false'
              >
                additional Information
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link tw-px-6 tw-py-3 bg-white text-heading fw-bold tw-text-sm border border-white text-uppercase tw-rounded-lg'
                id='pills-Review-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-Review'
                type='button'
                role='tab'
                aria-controls='pills-Review'
                aria-selected='false'
              >
                Review (09)
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link tw-px-6 tw-py-3 bg-white text-heading fw-bold tw-text-sm border border-white text-uppercase tw-rounded-lg'
                id='pills-faq-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-faq'
                type='button'
                role='tab'
                aria-controls='pills-faq'
                aria-selected='false'
              >
                faq
              </button>
            </li>
          </ul>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-ProductDetails'
              role='tabpanel'
              aria-labelledby='pills-ProductDetails-tab'
              tabIndex={0}
            >
              <div className=''>
                <div className=''>
                  <h4 className='tw-mb-3'>
                    Experience is over the world visit
                  </h4>
                  <p className='text-neutral-600 tw-text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                    viverra pretium, dolor tellus aliquet nu vitae ultricies
                    erat elit eu lacus. Vestibulum non justo consectetur, cursus
                    ante, tincidunt sapien. Nulla quis diam sit amet turpis
                    interdum accumsan quis nec enim. Vivamus faucibus ex sed
                    nibh egestas elementum. Mauris et bibendum dui. Aenean
                    consequat pulvinar luctus
                  </p>
                </div>
                <div className='tw-mt-17'>
                  <h5 className='tw-mb-7'>More Details :</h5>
                  <div className='row gy-4'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum has been the ‘s standard dummy text.
                            Lorem Ipsumum is simply dummy
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            type here your detail one by one li more add
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since. Lorem Ips
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-additionalInformation'
              role='tabpanel'
              aria-labelledby='pills-additionalInformation-tab'
              tabIndex={0}
            >
              <div className=''>
                <div className=''>
                  <h4 className='tw-mb-3'>
                    Experience is over the world visit
                  </h4>
                  <p className='text-neutral-600 tw-text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                    viverra pretium, dolor tellus aliquet nu vitae ultricies
                    erat elit eu lacus. Vestibulum non justo consectetur, cursus
                    ante, tincidunt sapien. Nulla quis diam sit amet turpis
                    interdum accumsan quis nec enim. Vivamus faucibus ex sed
                    nibh egestas elementum. Mauris et bibendum dui. Aenean
                    consequat pulvinar luctus
                  </p>
                </div>
                <div className='tw-mt-17'>
                  <h5 className='tw-mb-7'>More Details :</h5>
                  <div className='row gy-4'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum has been the ‘s standard dummy text.
                            Lorem Ipsumum is simply dummy
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            type here your detail one by one li more add
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since. Lorem Ips
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-Review'
              role='tabpanel'
              aria-labelledby='pills-Review-tab'
              tabIndex={0}
            >
              <div className=''>
                <div className=''>
                  <h4 className='tw-mb-3'>
                    Experience is over the world visit
                  </h4>
                  <p className='text-neutral-600 tw-text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                    viverra pretium, dolor tellus aliquet nu vitae ultricies
                    erat elit eu lacus. Vestibulum non justo consectetur, cursus
                    ante, tincidunt sapien. Nulla quis diam sit amet turpis
                    interdum accumsan quis nec enim. Vivamus faucibus ex sed
                    nibh egestas elementum. Mauris et bibendum dui. Aenean
                    consequat pulvinar luctus
                  </p>
                </div>
                <div className='tw-mt-17'>
                  <h5 className='tw-mb-7'>More Details :</h5>
                  <div className='row gy-4'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum has been the ‘s standard dummy text.
                            Lorem Ipsumum is simply dummy
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            type here your detail one by one li more add
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since. Lorem Ips
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-faq'
              role='tabpanel'
              aria-labelledby='pills-faq-tab'
              tabIndex={0}
            >
              <div className=''>
                <div className=''>
                  <h4 className='tw-mb-3'>
                    Experience is over the world visit
                  </h4>
                  <p className='text-neutral-600 tw-text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                    viverra pretium, dolor tellus aliquet nu vitae ultricies
                    erat elit eu lacus. Vestibulum non justo consectetur, cursus
                    ante, tincidunt sapien. Nulla quis diam sit amet turpis
                    interdum accumsan quis nec enim. Vivamus faucibus ex sed
                    nibh egestas elementum. Mauris et bibendum dui. Aenean
                    consequat pulvinar luctus
                  </p>
                </div>
                <div className='tw-mt-17'>
                  <h5 className='tw-mb-7'>More Details :</h5>
                  <div className='row gy-4'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum has been the ‘s standard dummy text.
                            Lorem Ipsumum is simply dummy
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            type here your detail one by one li more add
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since. Lorem Ips
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            has been the industry’s standard dummy text ever
                            since.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column tw-gap-8'>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            Lorem Ipsum generators on the tend to repeat.
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-4'>
                          <span className='tw-w-7 tw-h-7 bg-white common-shadow-eight rounded-circle text-main-600 d-flex justify-content-center align-items-center tw-text-lg'>
                            <i className='ph-bold ph-check' />
                          </span>
                          <p className='fw-medium'>
                            {" "}
                            If you are going to use a passage.
                          </p>
                        </div>
                      </div>
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

export default ProductTabsInner;
