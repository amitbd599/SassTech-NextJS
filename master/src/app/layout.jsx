// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-modal-video/scss/modal-video.scss";
// import "./font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import InitializeAOS from "@/helper/InitializeAOS";
import RouteScrollToTop from "@/helper/RouteScrollToTop";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>{/* <link rel='stylesheet' href='/assets/css/main.css' /> */}</head>
      <body suppressHydrationWarning={true}>
        <InitializeAOS />
        <RouteScrollToTop />

        {children}

        <script src='/assets/js/bootstrap.bundle.min.js'></script>
      </body>
    </html>
  );
}
