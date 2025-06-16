"use client";
import { useEffect, useState } from "react";

const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <>
      <header
        className={`header bg-white transition-all ${
          scroll && "fixed-header"
        } `}
      >
        <div className='container container-two'>
          <nav className='d-flex align-items-center justify-content-between'>
            {/* Logo Start */}
            <div className='logo'>
              <a
                href='index.html'
                className='link hover--translate-y-1 active--translate-y-scale-9'
              >
                <img
                  src='assets/images/logo/logo.png'
                  alt='Logo'
                  className='max-w-200-px'
                />
              </a>
            </div>
            {/* Logo End  */}
            {/* Menu Start  */}
            <div className='header-menu d-lg-block d-none'>
              {/* Nav menu Start */}
              <ul className='nav-menu d-lg-flex align-items-center tw-gap-14'>
                <li className='nav-menu__item has-submenu position-relative activePage'>
                  <a
                    href='javascript:void(0)'
                    className='nav-menu__link hover--translate-y-1 tw-pe-5 text-heading tw-py-9 fw-semibold w-100'
                  >
                    Home
                  </a>
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
            {/* Menu End  */}
            {/* Header Right start */}
            <div className='d-flex align-items-center tw-gap-6'>
              <a
                href='register.html'
                className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main-two hover-style-two button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-9 rounded-pill tw-py-4 fw-semibold'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Sign Up Now</span>
              </a>
              <button
                type='button'
                className='toggle-mobileMenu leading-none d-lg-none text-neutral-800 tw-text-9'
              >
                <i className='ph ph-list' />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
