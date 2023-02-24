import { useEffect, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";

import "./Slider.style.scss";
import gsap from "gsap";

export interface SliderItem {
  header: number | string;
  p: string;
}

interface ISlider {
  data: SliderItem[] | undefined;
}

const Slider: FC<ISlider> = ({ data }) => {
  useEffect(() => {
    gsap.fromTo(
      ".swiper-wrapper",
      { opacity: 0, y: 10 },
      { opacity: 1, duration: 0.4, delay: 0.4, y: 0 }
    );
  }, [data]);

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
      </Swiper>
    </div>
  );
};

export default Slider;
