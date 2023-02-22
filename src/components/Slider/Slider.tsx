import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";

import "./Slider.style.scss";

const Slider: FC = () => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={"auto"}
      freeMode={true}
      spaceBetween={80}
      modules={[FreeMode, Navigation]}
    >
      <SwiperSlide>
        <h1>2015</h1>
        <p>
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h1>2016</h1>
        <p>
          Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
          галактик, получившую обозначение GN-z11
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h1>2017</h1>
        <p>
          Компания Tesla официально представила первый в мире электрический
          грузовик Tesla Semi
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h1>2015</h1>
        <p>
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h1>2016</h1>
        <p>
          Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
          галактик, получившую обозначение GN-z11
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h1>2017</h1>
        <p>
          Компания Tesla официально представила первый в мире электрический
          грузовик Tesla Semi
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
