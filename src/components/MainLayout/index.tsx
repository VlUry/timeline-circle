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
  const [data, setData] = useState<DataItem[]>(initData);
  const [activeButtonIdx, setActiveButtonIdx] = useState(0);
  const [activeData, setActiveData] = useState<DataItem>();

  useEffect(() => {
    setActiveData(data.find((d) => d.active));
  }, [data]);

  useEffect(() => {
    const newData = data.map((button, idx) => {
      if (button.active) {
        return { ...button, active: false };
      }
      if (idx === activeButtonIdx) {
        return { ...button, active: true };
      }
      return button;
    });

    setData(newData);
  }, [activeButtonIdx]);

  const handleButtonClick = (idx: number) => {
    setActiveButtonIdx(idx);
  };

  const handleCircleNavClick = (num: number) => {
    if (activeButtonIdx + num >= 0 && activeButtonIdx + num < data.length) {
      setActiveButtonIdx((prev) => prev + num);
      return;
    }
    if (activeButtonIdx + num < 0) {
      setActiveButtonIdx(data.length - 1);
      return;
    }
    if (activeButtonIdx + num >= data.length) {
      setActiveButtonIdx(0);
      return;
    }
  };

  return (
    <>
      <div className="main-layout-container">
        <div className="big-text-block">Исторические даты</div>
        {activeData && <BigDates data={activeData} />}
        <CircleNav
          onCircleNavClick={handleCircleNavClick}
          activeButtonIdx={activeButtonIdx + 1}
          buttonsLength={data.length}
        />
        {activeData && <Slider data={activeData.slides} />}
        <Circle
          onButtonClick={handleButtonClick}
          data={data}
          activeButtonIdx={activeButtonIdx + 1}
        />
        {activeData && <span className="info">{activeData.info}</span>}
      </div>
    </>
  );
};

export default MainLayout;
