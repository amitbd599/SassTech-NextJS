import Link from "next/link";
import React from "react";

const LoginInner = () => {
  return (
    <section className='account py-120'>
      <div className='container'>
        <div className='max-w-514-px bg-white common-shadow-twentyOne tw-rounded-2xl tw-p-60-px mx-auto'>
          <h4 className='tw-mb-8 text-capitalize fst-italic fw-bold text-center max-w-250-px mx-auto'>
            Start Your Journey with us
          </h4>
          <form action='#' className='form-submit d-flex flex-column tw-gap-6'>
            <div>
              <label
                htmlFor='name'
                className='fw-semibold text-heading d-block tw-mb-105'
              >
                Enter your name
              </label>
              <input
                type='text'
                className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 tw-rounded-lg shadow-none'
                id='name'
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label
                htmlFor='createPassword'
                className='fw-medium text-base text-neutral-800 tw-mb-3'
              >
                {" "}
                Create password
              </label>
              <div className='position-relative'>
                <input
                  type='text'
                  className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 tw-rounded-lg shadow-none'
                  id='createPassword'
                  placeholder='Enter your name'
                />
                <span
                  className='toggle-password position-absolute top-50 tw-end-0 tw-me-4 tw-text-xl text-neutral-600 tw--translate-y-50 ph-bold ph-eye-slash'
                  id='#createPassword'
                />
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='common-check d-flex align-items-center tw-gap-2 mb-0'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='remember'
                />
                <div className='form-check-label text-neutral-600 fw-medium'>
                  <label htmlFor='remember'>Remember me</label>
                </div>
              </div>
              <Link
                href='#'
                className='hover-underline text-danger fw-semibold hover--translate-y-1 active-scale-09'
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <button
                type='submit'
                className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke  tw-gap-5 group active--translate-y-2 tw-px-4 tw-py-505 fw-medium btn-main hover-style-one w-100 rounded-pill'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Login</span>
              </button>
            </div>
          </form>
          <div className='form-check-label text-neutral-600 fw-semibold tw-mt-405 text-center'>
            <span>Are you new here?</span>
            <Link
              href='/register'
              className='text-decoration-underline text-neutral-600 fw-semibold hover--translate-y-1 active-scale-09 hover-text-main-600'
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginInner;
