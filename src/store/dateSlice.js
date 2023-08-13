import { createSlice } from "@reduxjs/toolkit";

const initialState = { allDays: [], formattedDays: [] };

export const daysSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getDaysSuccess(state, action) {
      const { payload } = action;
      state.allDays = payload;
      state.formattedDays = payload.map((day) => {
        return day.toISOString().slice(0, 10);
      });
    },
  },
});
export const { getDaysSuccess } = daysSlice.actions;

export default daysSlice.reducer;
