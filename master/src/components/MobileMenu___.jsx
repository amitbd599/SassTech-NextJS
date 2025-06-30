import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className='mobile-menu d-lg-none d-block scroll-sm position-fixed bg-white tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68 '>
        <button
          type='button'
          className='close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center text-neutral-900 bg-neutral-200 hover-bg-neutral-900 hover-text-white'
        >
          <i className='ph ph-x' />
        </button>
        <div className='mobile-menu__inner'>
          <Link href='/' className='mobile-menu__logo'>
            <img src='assets/images/logo/logo.png' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            {/* Nav menu Start */}
            <ul className='nav-menu d-lg-flex align-items-center nav-menu--mobile d-block tw-mt-8'>
              <li className='nav-menu__item has-submenu position-relative activePage'>
                <Link
                  href='#'
                  className='nav-menu__link hover--translate-y-1 tw-pe-5 text-heading tw-py-9 fw-semibold w-100'
                >
                  Home
                </Link>
                <ul className='nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                  <li className='nav-menu__item activePage'>
                    <a
                      href='index.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      IT Solution
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='index-2.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Web Hosting
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='index-3.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Task Management
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='index-4.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      CRM Software
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='index-5.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      App Landing
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-menu__item has-submenu position-relative'>
                <a
                  href='javascript:void(0)'
                  className='nav-menu__link hover--translate-y-1 tw-pe-5 text-heading tw-py-9 fw-semibold w-100'
                >
                  Pages
                </a>
                <ul className='nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='pricing-plan.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Pricing
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='about.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      About Us
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='app-intigration.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      App Integration
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='intigration-details.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Integration Details
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='policy-privacy.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='faq.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      FAQ
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='project-details.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Project Details
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='service-details.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Service Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-menu__item has-submenu position-relative'>
                <a
                  href='javascript:void(0)'
                  className='nav-menu__link hover--translate-y-1 tw-pe-5 text-heading tw-py-9 fw-semibold w-100'
                >
                  Shop
                </a>
                <ul className='nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='shop.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Shop
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='shop-details.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Shop Details
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='cart.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Cart
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='checkout.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Checkout
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-menu__item has-submenu position-relative'>
                <a
                  href='javascript:void(0)'
                  className='nav-menu__link hover--translate-y-1 tw-pe-5 text-heading tw-py-9 fw-semibold w-100'
                >
                  Blog
                </a>
                <ul className='nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='blog.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Blog
                    </a>
                  </li>
                  <li className='nav-submenu__item d-block tw-rounded tw-duration-200 position-relative'>
                    <a
                      href='blog-details.html'
                      className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                    >
                      Blog Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-menu__item'>
                <a
                  href='contact.html'
                  className='nav-menu__link hover--translate-y-1 text-heading tw-py-9 fw-semibold w-100'
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* Nav menu End  */}
          </div>
          <a
            href='register.html'
            className='btn btn-main-two hover-style-two button--stroke d-sm-none d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-8 rounded-pill tw-mt-6'
            data-block='button'
          >
            <span className='button__flair' />
            <span className='button__label'>Sign Up Now</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
