import Link from "next/link";
import React from "react";

const CheckoutInner = () => {
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-xxl-8 col-lg-7'>
            <div className=''>
              <h6 className='tw-mb-8'>Delivery Information</h6>
              <form action='#' className='form-submit'>
                <div className='row gy-4'>
                  <div className='col-sm-6'>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
                        placeholder='First Name'
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-fill ph-user' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
                        placeholder='Last Name'
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-fill ph-user' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
                        placeholder='Address here'
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-fill ph-map-pin' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='position-relative'>
                      <select className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'>
                        <option value='current City'>Current City</option>
                        <option value='Old City'>Old City</option>
                      </select>
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-bold ph-caret-down' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
                        placeholder='House Number & street number'
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-bold ph-house' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
                        placeholder='Apartment, suit, Unit etc'
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-fill ph-map-pin' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
                        placeholder='Zip Code'
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-fill ph-map-pin-simple' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
                        placeholder='Your Phone'
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
                        <i className='ph-fill ph-phone' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='position-relative'>
                      <textarea
                        className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none tw-min-h-210-px'
                        placeholder='Write Something....'
                        defaultValue={""}
                      />
                      <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-0 tw-mt-6 tw-end-0 tw-me-6'>
                        <i className='ph-fill ph-user' />
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <button
                      type='submit'
                      className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke  tw-gap-5 group active--translate-y-2 tw-px-4 tw-py-505 fw-medium btn-main hover-style-one w-100 tw-rounded-lg'
                      data-block='button'
                    >
                      <span className='button__flair' />
                      <span className='button__label'>
                        Save All Information
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-xxl-4 col-lg-5'>
            <div className=''>
              <h5 className='text-center tw-text-2xl tw-mb-10'>
                Order Summery
              </h5>
              <div className='bg-neutral-100 tw-py-16 tw-px-11 tw-rounded-lg'>
                <div className='d-flex flex-column tw-gap-7'>
                  <div className='tw-rounded-md tw-py-3 tw-px-6 text-neutral-600 d-flex align-items-center justify-content-between bg-white'>
                    <span className='fw-semibold tw-text-base text-capitalize'>
                      Subtotal
                    </span>
                    <span className='fw-bold tw-text-base text-capitalize text-heading'>
                      $345.00
                    </span>
                  </div>
                  <div className='tw-rounded-md tw-py-3 tw-px-6 text-neutral-600 d-flex align-items-center justify-content-between bg-white'>
                    <span className='fw-semibold tw-text-base text-capitalize'>
                      Shipping Fee
                    </span>
                    <span className='fw-bold tw-text-base text-capitalize text-heading'>
                      $34.00
                    </span>
                  </div>
                  <div className=''>
                    <form action='#' className='form-submit position-relative'>
                      <input
                        type='text'
                        className='form-control tw-rounded-md tw-py-4 tw-px-6 text-neutral-600 bg-white shadow-none border border-transparent focus-border-main-600 placeholder-neutral-600 fw-bold tw-pe-140-px'
                        placeholder='Enter voucher Code'
                      />
                      <button
                        type='submit'
                        className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke tw-gap-5 group active--translate-y-2 tw-px-6 tw-py-405 fw-medium btn-main hover-style-one position-absolute top-0 tw-end-0 h-100'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>Apply code</span>
                      </button>
                    </form>
                  </div>
                </div>
                <div className='tw-my-8'>
                  <div className=' d-flex align-items-center justify-content-between'>
                    <span className='fw-semibold tw-text-xl text-capitalize'>
                      Total
                    </span>
                    <span className='fw-bold tw-text-base text-capitalize text-heading'>
                      $345.00
                    </span>
                  </div>
                </div>
                <div className=''>
                  <div className='bg-white tw-rounded-xl tw-p-705 d-flex flex-column tw-gap-305'>
                    <div className='form-check common-check common-radio tw-gap-3 mb-0'>
                      <input
                        className='form-check-input bg-neutral-200'
                        name='paymentOption'
                        type='radio'
                        id='bankTransfer'
                      />
                      <label
                        className='form-check-label fw-medium text-heading'
                        htmlFor='bankTransfer'
                      >
                        Direct Bank transfer
                      </label>
                    </div>
                    <div className='form-check common-check common-radio tw-gap-3 mb-0'>
                      <input
                        className='form-check-input bg-neutral-200'
                        name='paymentOption'
                        type='radio'
                        id='CheckPayments'
                      />
                      <label
                        className='form-check-label fw-medium text-heading'
                        htmlFor='CheckPayments'
                      >
                        Check Payments
                      </label>
                    </div>
                    <div className='form-check common-check common-radio tw-gap-3 mb-0'>
                      <input
                        className='form-check-input bg-neutral-200'
                        name='paymentOption'
                        type='radio'
                        id='CashOnDelivery'
                      />
                      <label
                        className='form-check-label fw-medium text-heading'
                        htmlFor='CashOnDelivery'
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className='tw-mt-10'>
                  <Link
                    href='#'
                    className='hover-theme hover--translate-y-1 bg-crm active--translate-y-scale-9 btn button--stroke  tw-gap-5 group active--translate-y-2 px-xxl-5 px-xl-4 px-3 tw-py-405 fw-medium btn-main-two hover-style-two w-100'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Proceed to pay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutInner;
