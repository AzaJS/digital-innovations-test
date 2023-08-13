import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import calendarReducer from "./contrSlice";
import daysReducer from "./dateSlice";

const rootReducer = {
  calendar: calendarReducer,
  days: daysReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
