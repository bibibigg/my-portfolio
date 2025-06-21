import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UI/uislice";

const store = configureStore({
  reducer: {
    ui: uiReducer.reducer,
  },
});

export default store;
