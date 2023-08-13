import { intlFormat } from "date-fns";
import React, { useLayoutEffect, useRef } from "react";

const CellInfo = ({ clicked, contrDays, day }) => {
  //   console.log(new Date(day.date));
  const result = intlFormat(
    new Date(day.date),
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
    {
      locale: "kg-KG",
    }
  );
  console.log(result);
  const ref = useRef();
  useLayoutEffect(() => {
    clicked
      ? (ref.current.childNodes[0].style.visibility = "visible")
      : (ref.current.childNodes[0].style.visibility = "hidden");
  }, [clicked]);
  return (
    <div ref={ref} className="tooltip">
      <span className="tooltiptext">
        {contrDays} contributions <span className="tooltipdate">{result}</span>
      </span>
    </div>
  );
};

export default CellInfo;
