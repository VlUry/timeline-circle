import { type FC } from "react";
import { DataItem } from "../MainLayout";

import "./Circle.style.scss";

interface ICircle {
  onButtonClick: (idx: number) => void;
  data: DataItem[];
  activeButtonIdx: number;
}

const Circle: FC<ICircle> = ({ onButtonClick, data, activeButtonIdx }) => {
  const angle = 360 / data.length;

  return (
    <>
      <div
        className="circle"
        style={{
          transform: `rotate(-${activeButtonIdx * angle - (angle - 60)}deg)`,
        }}
      >
        {data.map((button, idx) => (
          <button
            key={idx}
            className={"circle-button" + (button.active ? " active" : "")}
            onClick={() => onButtonClick(idx)}
            style={{
              transform: `rotate(${
                angle * idx
              }deg) translate(${265.5}px) rotate(${
                angle * (activeButtonIdx - idx) - (angle - 60)
              }deg)`,
            }}
          >
            {idx + 1}
            <span>{button.info}</span>
          </button>
        ))}
      </div>
      <div className="circle-pagination">
        {data.map((button, idx) => (
          <button
            key={idx}
            className={"circle-button" + (button.active ? " active" : "")}
            onClick={() => onButtonClick(idx)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Circle;
