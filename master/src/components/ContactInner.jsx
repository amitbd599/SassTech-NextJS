import React from "react";

const ContactInner = () => {
  return (
    <>
      <section className='bg-neutral-light-half style-two'>
        <div className='container'>
          <div className='bg-white tw-py-9 tw-px-8'>
            <div className='row gy-4'>
              <div className='col-lg-4 col-sm-6'>
                <div className='bg-white tw-rounded-lg tw-py-15 tw-px-5 common-shadow-thirteen hover-bg-main-600 group group-item text-center animation-item tw-transition tw-duration-200 h-100'>
                  <span className='tw-mb-705'>
                    <img
                      src='assets/images/icons/contact-icon1.svg'
                      alt='Icon'
                      className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                    />
                  </span>
                  <h5 className='group-hover-text-white tw-transition tw-duration-200 tw-mb-5 text-capitalize splitTextStyleOne'>
                    address line
                  </h5>
                  <div className='max-w-250-px mx-auto'>
                    <p className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'>
                      Bowery St, New York, 37 USA NY 10013,USA
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <div className='bg-white tw-rounded-lg tw-py-15 tw-px-5 common-shadow-thirteen hover-bg-main-600 group group-item text-center animation-item tw-transition tw-duration-200 h-100'>
                  <span className='tw-mb-705'>
                    <img
                      src='assets/images/icons/contact-icon2.svg'
                      alt='Icon'
                      className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                    />
                  </span>
                  <h5 className='group-hover-text-white tw-transition tw-duration-200 tw-mb-5 text-capitalize splitTextStyleOne'>
                    Phone Number
                  </h5>
                  <div className='max-w-250-px mx-auto'>
                    <a
                      href='tel:+125556865234374221'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'
                    >
                      +1255 - 568 - 6523 4374-221
                    </a>
                    <a
                      href='tel:+12555686523'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne tw-mt-1'
                    >
                      +1255 - 568 - 6523
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <div className='bg-white tw-rounded-lg tw-py-15 tw-px-5 common-shadow-thirteen hover-bg-main-600 group group-item text-center animation-item tw-transition tw-duration-200 h-100'>
                  <span className='tw-mb-705'>
                    <img
                      src='assets/images/icons/contact-icon3.svg'
                      alt='Icon'
                      className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                    />
                  </span>
                  <h5 className='group-hover-text-white tw-transition tw-duration-200 tw-mb-5 text-capitalize splitTextStyleOne'>
                    Mail Address
                  </h5>
                  <div className='max-w-250-px mx-auto'>
                    <a
                      href='mailto:email@example.com'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'
                    >
                      email@example.com
                    </a>
                    <a
                      href='mailto:info@yourdomain.com'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'
                    >
                      info@yourdomain.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120'>
        <div className='container'>
          <div className='row gy-5'>
            <div className='col-lg-6'>
              <div className='pe-xl-5 pe-lg-4'>
                <div className=''>
                  <span className='splitTextStyleTwo tw-text-xl fw-bold fst-italic text-decoration-underline text-main-600 tw-mb-305'>
                    Get In Touch
                  </span>
                  <h3 className='splitTextStyleOne tw-mb-4'>Contact Us</h3>
                  <p className='text-neutral-900'>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque inventore
                  </p>
                </div>
                <div className='xs-grid-cols-2 d-grid tw-mt-16 tw-gap-74-px'>
                  <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-map-pin' />
                    </span>
                    <div className=''>
                      <h6 className='tw-mb-4'>Location</h6>
                      <p className='text-neutral-600'>
                        55 Main street, 2nd block, Melbourne, Australia
                      </p>
                    </div>
                  </div>
                  <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-phone' />
                    </span>
                    <div className=''>
                      <h6 className='tw-mb-4'>Phone</h6>
                      <a
                        href='tel:+1(368)5678954'
                        className='text-neutral-600 hover-text-main-600'
                      >
                        +1 (368) 567 89 54
                      </a>
                      <a
                        href='tel:+236(456)89622'
                        className='text-neutral-600 hover-text-main-600 tw-mt-1'
                      >
                        +236 (456) 896 22
                      </a>
                    </div>
                  </div>
                  <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-envelope-simple' />
                    </span>
                    <div className=''>
                      <h6 className='tw-mb-4'>Location</h6>
                      <a
                        href='mailto:wiatechinfo@gmail.com'
                        className='text-neutral-600 hover-text-main-600'
                      >
                        wiatechinfo@gmail.com
                      </a>
                      <a
                        href='mailto:www.wiatech.com'
                        className='text-neutral-600 hover-text-main-600'
                      >
                        www.wiatech.com
                      </a>
                    </div>
                  </div>
                  <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-share-network' />
                    </span>
                    <div className=''>
                      <h6 className='tw-mb-4'>Social</h6>
                      <ul className='d-flex align-items-center tw-gap-3 justify-content-center tw-mt-6'>
                        <li>
                          <a
                            href='https://www.facebook.com'
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-facebook-logo' />
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.twitter.com'
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-x-logo' />
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.instagram.com'
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-instagram-logo' />
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.youtube.com'
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-youtube-logo' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* map Start */}
                <div className='map tw-mt-15'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5591642.125572935!2d-118.45027922609367!3d46.81821123121407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5343f19fafa367dd%3A0xe0a08a08122c4da1!2sHelena-Lewis%20and%20Clark%20National%20Forest!5e0!3m2!1sen!2sbd!4v1731480188813!5m2!1sen!2sbd'
                    className='w-100'
                    height={240}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
                {/* map End */}
              </div>
            </div>
            <div className='col-lg-6 ps-lg-5'>
              <div className='bg-neutral-50 tw-py-17 tw-px-705'>
                <h4 className='tw-mb-4'>Fill Up The Form</h4>
                <p className='text-neutral-600 max-w-444-px'>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form
                  action='#'
                  className='tw-mt-70-px d-flex flex-column tw-gap-12 form-submit'
                >
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='focus-outline-0 bg-transparent border-0 tw-pb-5 tw-ps-9 w-100 border-bottom border-neutral-200 focus-border-main-600'
                      placeholder='Your Name*'
                      required=''
                    />
                    <span className='tw-text-xl d-flex text-neutral-500 position-absolute top-0 tw-start-0'>
                      <i className='ph-bold ph-user' />
                    </span>
                  </div>
                  <div className='position-relative'>
                    <input
                      type='email'
                      className='focus-outline-0 bg-transparent border-0 tw-pb-5 tw-ps-9 w-100 border-bottom border-neutral-200 focus-border-main-600'
                      placeholder='Email Address*'
                      required=''
                    />
                    <span className='tw-text-xl d-flex text-neutral-500 position-absolute top-0 tw-start-0'>
                      <i className='ph-bold ph-envelope' />
                    </span>
                  </div>
                  <div className='position-relative'>
                    <textarea
                      className='focus-outline-0 bg-transparent border-0 tw-pb-5 tw-ps-9 w-100 border-bottom border-neutral-200 focus-border-main-600 tw-h-108-px'
                      placeholder='Enter Your Message here'
                      defaultValue={""}
                    />
                    <span className='tw-text-xl d-flex text-neutral-500 position-absolute top-0 tw-start-0'>
                      <i className='ph-bold ph-note-pencil' />
                    </span>
                  </div>
                  <div className=''>
                    <button
                      type='submit'
                      className='hover-black btn btn-main hover--translate-y-1 active--translate-y-scale-9 hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 rounded-0'
                      data-block='button'
                    >
                      <span className='button__flair' />
                      <span className='text-white tw-text-2xl group-hover-text-white tw-duration-500 position-relative'>
                        <i className='ph-bold ph-paper-plane-tilt' />
                      </span>
                      <span className='button__label'>Get In Touch</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
