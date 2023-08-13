import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/main.scss";
import { getContributions } from "./store/contrActions";
import Calendar from "./components/Calendar";

const App = () => {
  const dispatch = useDispatch();

  const datas = useSelector((state) => state.contributions);

  useEffect(() => {
    dispatch(getContributions());
  }, []);
  const days = useSelector((state) => state.days.allDays);

  const firstWeek = days.slice(0, 7);

  console.log(datas);

  return (
    <div>
      <div className="root-style">
        <div className="left-panel">
          {firstWeek.map((day, i) =>
            day.getDay() == 1 ? (
              <p key={i}>Пн</p>
            ) : day.getDay() == 3 ? (
              <p key={i}>Cр</p>
            ) : day.getDay() == 5 ? (
              <p key={i}>Пт</p>
            ) : (
              <p key={i} className="empty-block"></p>
            )
          )}
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default App;
