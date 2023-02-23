import { useEffect, useState, type FC } from "react";

import "./Circle.style.scss";

const Circle: FC = () => {
  const [activeButton, setActiveButton] = useState(5);

  const [data, setData] = useState([
    { info: "Наука1", active: false },
    { info: "Наука2", active: false },
    { info: "Наука3", active: false },
    { info: "Наука4", active: false },
    { info: "Наука5", active: false },
    { info: "Наука", active: false },
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
    <div className="circle-container">
      <div className="circle">
        {data.map((button, idx) => (
          <button
            key={idx}
            className={"circle-button" + (button.active ? " active" : "")}
            onClick={() => handleButtonClick(idx)}
          >
            {idx + 1}
            <span>{button.info}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Circle;
