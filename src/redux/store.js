import { configureStore } from "@reduxjs/toolkit";
import cecoReducer from "src/redux/cecoSlice";
import machineReducer from "src/redux/machineSlice";
import jobOrdersReducer from "src/redux/jobOrderSlice";
import equipmentLifeSheetReducer from "src/redux/equipmentLifeSheetSlice";
import usageSheetsReducer from "src/redux/usageSheetSlice";

const store = configureStore({
  reducer: {
    machines: machineReducer,
    jobOrders: jobOrdersReducer,
    cecos: cecoReducer,
    equipmentLifeSheets: equipmentLifeSheetReducer,
    usageSheets: usageSheetsReducer,
  },
});

export default store;
