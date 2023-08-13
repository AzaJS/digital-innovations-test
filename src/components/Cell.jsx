import React, { useLayoutEffect, useRef, useState } from "react";
import CellInfo from "./CellInfo";
// import { useSelector } from "react-redux";

const Cell = ({ day }) => {
  const [clicked, setClicked] = useState(false);
  const cellRef = useRef();
  useLayoutEffect(() => {
    if (day.value > 1 && day.value < 9) {
      cellRef.current.className += " weak-contr";
    } else if (day.value >= 10 && day.value <= 19) {
      cellRef.current.className += " mid-contr";
    } else if (day.value >= 20 && day.value <= 29) {
      cellRef.current.className += " strong-contr";
    } else if (day.value >= 30) {
      cellRef.current.className += " max-contr";
    }
  }, []);

  //   const [visState, setVisState] = useState("");
  return (
    <div
      ref={cellRef}
      className="cell"
      aria-selected={clicked}
      onClick={() => setClicked((state) => !state)}
    >
      <CellInfo contrDays={day.value} clicked={clicked} day={day} />
    </div>
  );
};

export default Cell;
