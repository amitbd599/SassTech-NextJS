import Script from "next/script";
import InitializeAOS from "@/helper/InitializeAOS";
import PhosphorIconsLoader from "@/helper/PhosphorIconsLoader";
import RouteScrollToTop from "@/helper/RouteScrollToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./font.css";
import "./globals.css";

export async function generateMetadata() {
  return {
    title: {
      default: "SassTech - SaaS Template",
      template: "%s | SassTech",
    },
    description: "SaaS, IT Solutions, and Software multipurpose template.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <InitializeAOS />
        <RouteScrollToTop />
        <PhosphorIconsLoader />

        {children}

        <Script
          src='/assets/js/boostrap.bundle.min.js'
          strategy='afterInteractive'
        />
      </body>
    </html>
  );
}
