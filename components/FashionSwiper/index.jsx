import { register } from "swiper/element/bundle";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import leftArrow from "@/public/left-arrow.svg";
import rightArrow from "@/public/right-arrow.svg";

register();

const FashionSwiper = (props) => {
  const {
    slidesPerView = 3,
    sliderData,
    leftArrowImage = leftArrow,
    rightArrowImage = rightArrow,
    nextEl,
    prevEl,
    el,
  } = props;

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView,
      navigation: true,
      pagination: true,
      effect: "coverflow",
      coverflowEffect: {
        // added
        rotate: 0, // added (Rotate of the prev and next slides)
        depth: 400, // added (Depth of the prev and next slides)
        stretch: 0, // added (Space between the slides)
        modifier: 1, // added (Multiply the values of rotate, depth, and stretch)
        scale: 1, // added (Size ratio of the prev and next slides)
        slideShadows: true, // added (Presence of shadow on the surfaces of the prev and next slides)
      },
      navigation: {
        nextEl: `.${nextEl}`,
        prevEl: `.${prevEl}`,
        disabledClass: "swiper-arrow-disabled",
      },
      pagination: {
        el: `.${el}`,
        clickable: true,
      },
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [slidesPerView, el, nextEl, prevEl]);

  return (
    <>
      <swiper-container ref={swiperRef} init="false">
        {sliderData?.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <swiper-slide>
                {" "}
                <Image src={item.path} alt={item.id} />
              </swiper-slide>
            </React.Fragment>
          );
        })}
      </swiper-container>

      <div className="d-flex justify-content-center mt-4">
        <div className={prevEl}>
          <Image src={leftArrowImage} alt="left-arrow" />
        </div>
        <span className={el} />
        <div className={nextEl}>
          <Image src={rightArrowImage} alt="right-arrow" />
        </div>
      </div>
    </>
  );
};

export default FashionSwiper;
