import InitializeAOS from "@/helper/InitializeAOS";
import PhosphorIconsLoader from "@/helper/PhosphorIconsLoader";
import RouteScrollToTop from "@/helper/RouteScrollToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./globals.scss";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='/assets/css/bootstrap.min.css' />
        <link rel='stylesheet' href='/assets/css/aos.css' />
        <link rel='stylesheet' href='/assets/css/satoshi.css' />
        {/* <link rel='stylesheet' href='/assets/css/swiper-bundle.min.css' /> */}
        <link rel='stylesheet' href='/assets/css/main.css' />
      </head>
      <body suppressHydrationWarning={true}>
        <InitializeAOS />
        <RouteScrollToTop />
        <PhosphorIconsLoader />

        {children}

        <script src='/assets/js/boostrap.bundle.min.js'></script>
      </body>
    </html>
  );
}
