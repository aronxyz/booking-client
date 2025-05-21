// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./MySwipper.css";

import { Pagination, Navigation } from "swiper/modules";

export default function MySwiper() {
  return (
    <div className="test">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        centeredSlides={true}
      >
        <SwiperSlide>
          <img src="barcelonaedition_oab_00003.jpg" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="barcelonaedition_oab_00006.jpg" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="barcelonaedition_oab_00007.jpg" alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="barcelonaedition_oab_00002.jpg" alt="Image 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
