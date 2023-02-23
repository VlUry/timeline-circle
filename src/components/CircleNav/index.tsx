import { type FC } from "react";

import "./CircleNav.style.scss";

interface ICircleNav {
  activeButtonIdx: number;
  buttonsLength: number;
  onCircleNavClick: (num: number) => void;
}

const CircleNav: FC<ICircleNav> = ({
  onCircleNavClick,
  activeButtonIdx,
  buttonsLength,
}) => {
  return (
    <div className="circle-navigation">
      <div className="circle-navigation_up">
        <span>0{activeButtonIdx}</span>/<span>0{buttonsLength}</span>
      </div>
      <div className="circle-navigation_bottom">
        <button
          className="circle-navigation-button"
          onClick={() => onCircleNavClick(-1)}
        >
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
              stroke="#42567A"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          className="circle-navigation-button"
          onClick={() => onCircleNavClick(1)}
        >
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
          >
            <path
              d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
              stroke="#42567A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CircleNav;
