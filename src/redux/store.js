import { configureStore } from "@reduxjs/toolkit";
import machineReducer from "./machineSlice";
import jobOrdersReducer from "src/redux/jobOrderSlice";
import cecoReducer from "src/redux/cecoSlice";

const store = configureStore({
  reducer: {
    machines: machineReducer,
    jobOrders: jobOrdersReducer,
    cecos: cecoReducer
  },
});

export default store;
