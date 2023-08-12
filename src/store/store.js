import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import calendarReducer from "./contrSlice";

export const store = configureStore({
  reducer: calendarReducer,
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
