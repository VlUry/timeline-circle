import { type FC } from "react";
import { DataItem } from "../MainLayout";

import "./BigDates.style.scss";

interface IBigData {
  data: DataItem | undefined;
}

const BigDates: FC<IBigData> = ({ data }) => {
  return (
    <div className="big-dates-block">
      {data && (
        <>
          <span>{data.from}</span>
          <span>{data.to}</span>
        </>
      )}
    </div>
  );
};

export default BigDates;
