import "swiper/css";
import "swiper/css/navigation";

import { Swiper } from "swiper/react";
import { Keyboard, Autoplay ,Navigation} from "swiper/modules";
const SwiperComponent = ({ children }) => {
  return (
    <div className="Swiper">
      <Swiper
        modules={[Keyboard, Autoplay,Navigation]}
        keyboard={{ enabled: true }}
        spaceBetween={4}
        slidesPerView={4}
        allowTouchMove={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true,
        }}
        navigation={true}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
