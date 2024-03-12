"use client";

import { Playfair_Display as PlayFairDisplay } from "next/font/google";
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Button from "@/components/Button";
import { strings } from "@/helpers/constant";
import FashionSwiper from "@/components/FashionSwiper";

const playFair = PlayFairDisplay({
  weight: "700",
  fontSize: 64,
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <div className="container py-5 mx-auto">
      <div className="row">
        <div className="col-3 pt-5">
          <Image
            src={strings.landingPage.leftBannerPath}
            alt="leftBanner"
            className={styles.bannerImage}
          />
        </div>
        <div className="col-6 text-center">
          <div className={[playFair.className]}>
            <p className="fs-50">{strings.landingPage.title}</p>
          </div>
          <p className="fs-14">{strings.landingPage.description}</p>
          <Button className="primary" label={strings.landingPage.button} />
        </div>
        <div className="col-3 pt-5">
          <Image
            src={strings.landingPage.rightBannerPath}
            alt="rightBanner"
            className={styles.bannerImage}
          />
        </div>
      </div>
      <FashionSwiper
        sliderData={strings.landingPage.imagesList}
        el="landing-swiper-bullet"
        nextEl="landing-swiper-arrow-right"
        prevEl="landing-swiper-arrow-left"
      />
    </div>
  );
};

export default LandingPage;
