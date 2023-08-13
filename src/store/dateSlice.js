import { createSlice } from "@reduxjs/toolkit";

const initialState = { allDays: [] };

export const daysSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getDaysSuccess(state, action) {
      const { payload } = action;
      state.allDays = payload;
    },
  },
});
export const { getDaysSuccess } = daysSlice.actions;

export default daysSlice.reducer;
