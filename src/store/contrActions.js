import { CALENDAR_API } from "../api/consts";
import { getContributionsSuccess } from "./contrSlice";
import axios from "axios";

export const getContributions = () => async (dispatch) => {
  try {
    let data = await axios(CALENDAR_API);
    dispatch(getContributionsSuccess(data));
  } catch (error) {
    console.log(error.message);
  }
};
