import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDaysSuccess } from "../store/dateSlice";
import Cell from "./Cell";
import { months } from "../api/consts";

const Calendar = () => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.days.allDays);
  const todayDate = new Date();
  const daysWithin50Weeks = new Date(
    new Date().setDate(todayDate.getDate() - 51 * 7)
  );
  const dateToChange = new Date(daysWithin50Weeks);
  async function getDaysInArr() {
    let arr = [];
    while (dateToChange <= todayDate) {
      arr.push(new Date(dateToChange));
      dateToChange.setDate(dateToChange.getDate() + 1);
    }
    arr.shift();
    dispatch(getDaysSuccess(arr));
  }

  useEffect(() => {
    getDaysInArr();
  }, []);

  let monthsArr = [...months];
  if (days.length) {
    let ggg = monthsArr.splice(days[0].getMonth());
    monthsArr.unshift(...ggg);
  }

  return (
    <div className="calendar">
      <div className="months">
        {monthsArr.map((elem, i) => (
          <span key={i}>{elem}</span>
        ))}
      </div>
      <div className="calendar-cells">
        {days.map((day, i) => {
          return <Cell key={i} day={day} />;
        })}
      </div>
    </div>
  );
};

export default Calendar;
