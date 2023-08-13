import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDaysSuccess } from "../store/dateSlice";
import Cell from "./Cell";
import { months } from "../api/consts";

const Calendar = () => {
  const [dateToMap, setDateToMap] = useState([]);
  const dispatch = useDispatch();

  const days = useSelector((state) => state.days.allDays);
  const formattedDates = useSelector((state) => state.days.formattedDays);
  const contrDates = useSelector((state) => state.calendar.contributions);

  const todayDate = new Date();
  const daysWithin50Weeks = new Date(
    new Date().setDate(todayDate.getDate() - 51 * 7)
  );
  const dateToChange = new Date(daysWithin50Weeks);

  function getDaysInArr() {
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
  let combinedArray = [];
  if (contrDates) {
    combinedArray = formattedDates.map((date) => ({
      date,
      value: contrDates.data[date] || 0, // Use the value from the object, or default to 0 if not found
    }));
  }
  useEffect(() => {
    setDateToMap(combinedArray);
  }, [contrDates]);

  return (
    <div className="calendar">
      <div className="months">
        {monthsArr.map((elem, i) => (
          <span key={i}>{elem}</span>
        ))}
      </div>
      <div className="calendar-cells">
        {dateToMap.length ? (
          dateToMap.map((day, i) => {
            return <Cell key={i} day={day} />;
          })
        ) : (
          <>wait!</>
        )}
      </div>
    </div>
  );
};

export default Calendar;
