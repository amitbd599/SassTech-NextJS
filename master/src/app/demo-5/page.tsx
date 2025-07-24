import React from "react";
import AOSWrap from "@/helper/AOSWrap";
import HeaderFive from "@/components/HeaderFive";
import CustomCursor from "@/helper/CustomCursor";
import TopHeaderThree from "@/components/TopHeaderThree";
import BannerFive from "@/components/BannerFive";
import BrandFive from "@/components/BrandFive";
import WorkProcessOne from "@/components/WorkProcessOne";
import OfferTwo from "@/components/OfferTwo";
import AboutFeaturesOne from "@/components/AboutFeaturesOne";
import CounterUpTwo from "@/components/CounterUpTwo";
import DownloadAppOne from "@/components/DownloadAppOne";
import AppScreenshotOne from "@/components/AppScreenshotOne";
import TestimonialsFive from "@/components/TestimonialsFive";
import PricingPlanThree from "@/components/PricingPlanThree";
import FooterFive from "@/components/FooterFive";

import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home - 5 | SassTech - Saas Software and IT Solution",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "About | SassTech",
      description:
        "Learn more about our SaaS software, team, features, and IT solutions.",
      url: "https://nextjs.sasstech.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.sasstech.webnextpro.com/images/about-og.jpg",
          width: 1200,
          height: 630,
          alt: "About SassTech",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <section className='home-five'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* TopHeaderThree */}
        <TopHeaderThree />

        {/* HeaderFive */}
        <HeaderFive />

        {/* BannerFive */}
        <BannerFive />

        {/* BrandFive */}
        <BrandFive />

        {/* WorkProcessOne */}
        <WorkProcessOne />

        {/* OfferTwo */}
        <OfferTwo />

        {/* AboutFeaturesOne */}
        <AboutFeaturesOne />

        {/* CounterUpTwo */}
        <CounterUpTwo />

        {/* DownloadAppOne */}
        <DownloadAppOne />

        {/* AppScreenshotOne */}
        <AppScreenshotOne />

        {/* TestimonialsFive */}
        <TestimonialsFive />

        {/* PricingPlanThree */}
        <PricingPlanThree />

        {/* FooterFive */}
        <FooterFive />
      </section>
    </AOSWrap>
  );
};

export default Page;
