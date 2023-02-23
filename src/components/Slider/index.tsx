import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";

import "./Slider.style.scss";

export interface SliderItem {
  header: number | string;
  p: string;
}

interface ISlider {
  data: SliderItem[] | undefined;
}

const Slider: FC<ISlider> = ({ data }) => {
  return (
    <div className="slider-container">
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={0}
        modules={[FreeMode, Navigation]}
      >
        {data?.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <h1>{slide.header}</h1>
            <p>{slide.p}</p>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
