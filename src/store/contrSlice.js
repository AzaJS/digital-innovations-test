import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contributions: null,
};

export const dateSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    getContributionsSuccess(state, action) {
      const { payload } = action;
      state.contributions = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getContributionsSuccess } = dateSlice.actions;

export default dateSlice.reducer;
