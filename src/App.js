import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cell from "./components/Cell";
import "./styles/main.scss";
import { getContributions } from "./store/contrActions";

const App = () => {
  const dateStart = new Date(2022, 3);
  const dateEnd = new Date(2023, 3, 0);

  const allDays = [];

  const dateToChange = new Date(dateStart);

  const dispatch = useDispatch();

  const datas = useSelector((state) => state.contributions);

  useEffect(() => {
    dispatch(getContributions());
  }, []);

  return (
    <div>
      <Cell />
    </div>
  );
};

export default App;
