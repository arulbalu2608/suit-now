"use client";
import TitleCard from "@/components/TitleCard";
import { strings } from "@/helpers/constant";
import CustomSwiper from "@/components/CustomSwiper";

const PromoCode = () => {
  return (
    <div className="container my-5">
      <TitleCard
        title={strings.promoCode.title}
        description={strings.promoCode.description}
      />
      <CustomSwiper
        sliderData={strings.promoCode.imagesList}
        slidesPerView={5}
        el="swiper-bullet"
        nextEl="swiper-arrow-right"
        prevEl="swiper-arrow-left"
      />
    </div>
  );
};

export default PromoCode;
