import React from "react";
import "swiper/css";

import "./style.css";
import banner1 from "../../../assets/20288098_6260330.jpg";
import banner2 from "../../../assets/35808877_8330162.jpg";
import banner3 from "../../../assets/8443993_3826410.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Keyboard, Autoplay]}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        allowTouchMove={true}
        loop={true}

      >
        <SwiperSlide>
          <img src={banner1} alt="home banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="home banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="home banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
