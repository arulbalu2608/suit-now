"use client";
import CustomSwiper from "@/components/CustomSwiper";
import TitleCard from "@/components/TitleCard";
import { strings } from "@/helpers/constant";

const Trending = () => {
  return (
    <div className="container my-5">
      <TitleCard
        title={strings.trending.title}
        description={strings.trending.description}
      />
      <CustomSwiper
        sliderData={strings.trending.imagesList}
        slidesPerView={3}
        el="trending-swiper-bullet"
        nextEl="trending-swiper-arrow-right"
        prevEl="trending-swiper-arrow-left"
      />
    </div>
  );
};

export default Trending;
