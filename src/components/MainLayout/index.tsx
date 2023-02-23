import { useEffect, useState, type FC } from "react";
import initData from "../../initData";
import BigDates from "../BigDates";
import Circle from "../Circle";
import CircleNav from "../CircleNav";
import Slider, { type SliderItem } from "../Slider";

import "./MainLayout.style.scss";

export interface DataItem {
  info: string;
  active: boolean;
  from: number;
  to: number;
  slides?: SliderItem[];
}

const MainLayout: FC = () => {
  const [activeButton, setActiveButton] = useState(5);

  const [data, setData] = useState<DataItem[]>(initData);

  useEffect(() => {
    const newData = data.map((button, idx) => {
      if (button.active) {
        return { ...button, active: false };
      }
      if (idx === activeButton) {
        return { ...button, active: true };
      }
      return button;
    });

    setData(newData);
  }, [activeButton]);

  const handleButtonClick = (idx: number) => {
    setActiveButton(idx);
  };

  const handleCircleNavClick = (num: number) => {
    if (activeButton + num >= 0 && activeButton + num < data.length) {
      setActiveButton((prev) => prev + num);
      return;
    }
    if (activeButton + num < 0) {
      setActiveButton(data.length - 1);
      return;
    }
    if (activeButton + num >= data.length) {
      setActiveButton(0);
      return;
    }
  };

  return (
    <>
      <div className="main-layout-container">
        <div className="big-text-block">Исторические даты</div>
        <BigDates data={data.find((d) => d.active)} />
        <CircleNav
          onCircleNavClick={handleCircleNavClick}
          activeButtonIdx={activeButton + 1}
          buttonsLength={data.length}
        />
        <Slider data={data.find((d) => d.active)?.slides} />
        <Circle
          onButtonClick={handleButtonClick}
          data={data}
          activeButtonIdx={activeButton + 1}
        />
        <span className="info">{data.find((d) => d.active)?.info}</span>
      </div>
    </>
  );
};

export default MainLayout;
