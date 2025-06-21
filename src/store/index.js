import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UI/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer.reducer,
  },
});

export default store;
