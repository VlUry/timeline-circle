import { useEffect, useState, type FC } from "react";
import BigDates from "../BigDates";
import Circle from "../Circle";
import CircleNav from "../CircleNav";
import Slider from "../Slider";

import "./MainLayout.style.scss";

export interface DataItem {
  info: string;
  active: boolean;
  from: number;
  to: number;
}

const MainLayout: FC = () => {
  const [activeButton, setActiveButton] = useState(5);

  const [data, setData] = useState<DataItem[]>([
    { info: "", active: false, from: 2000, to: 2022 },
    { info: "", active: false, from: 2015, to: 2022 },
    { info: "", active: false, from: 2015, to: 2022 },
    { info: "", active: false, from: 2015, to: 2022 },
    { info: "", active: false, from: 2015, to: 2022 },
    { info: "Наука", active: false, from: 2015, to: 2022 },
  ]);

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
  return (
    <>
      <div className="main-layout-container">
        <BigDates data={data.find((d) => d.active)} />
        <CircleNav />
        <Slider />
        <Circle onButtonClick={handleButtonClick} data={data} />
      </div>
    </>
  );
};

export default MainLayout;
