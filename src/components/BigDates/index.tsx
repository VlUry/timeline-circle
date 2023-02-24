import gsap from "gsap";
import { useEffect, useRef, type FC } from "react";
import { DataItem } from "../MainLayout";

import "./BigDates.style.scss";

interface IBigData {
  data: DataItem;
}

const dateAnimation: gsap.TweenVars = {
  duration: 0.6,
  snap: { textContent: 1 },
};

const BigDates: FC<IBigData> = ({ data }) => {
  const nextData = useRef<DataItem>();
  const prevData = useRef<DataItem>();

  useEffect(() => {
    prevData.current = nextData.current;
    nextData.current = data;

    gsap.from(".big-date-span_from", {
      textContent: prevData.current?.from,
      ...dateAnimation,
    });
    gsap.from(".big-date-span_to", {
      textContent: prevData.current?.to,
      ...dateAnimation,
    });
  }, [data]);

  return (
    <div className="big-dates-block">
      {data && (
        <>
          <span className="big-date-span_from">{data.from}</span>
          <span className="big-date-span_to">{data.to}</span>
        </>
      )}
    </div>
  );
};

export default BigDates;
