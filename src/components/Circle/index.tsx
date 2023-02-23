import { type FC } from "react";
import { DataItem } from "../MainLayout";

import "./Circle.style.scss";

interface ICircle {
  onButtonClick: (idx: number) => void;
  data: DataItem[];
}

const Circle: FC<ICircle> = ({ onButtonClick, data }) => {
  return (
    <div className="circle">
      {data.map((button, idx) => (
        <button
          key={idx}
          className={"circle-button" + (button.active ? " active" : "")}
          onClick={() => onButtonClick(idx)}
        >
          {idx + 1}
          <span>{button.info}</span>
        </button>
      ))}
    </div>
  );
};

export default Circle;
