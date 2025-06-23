import { configureStore } from "@reduxjs/toolkit";
import cecoReducer from "src/redux/cecoSlice";
import machineReducer from "src/redux/machineSlice";
import jobOrdersReducer from "src/redux/jobOrderSlice";
import usageSheetsReducer from "src/redux/usageSheetSlice";
import dailyStatusReducer from "src/redux/dailyStatusSlice";
import operativeStateReducer from "src/redux/operativeState";
import equipmentLifeSheetReducer from "src/redux/equipmentLifeSheetSlice";

const store = configureStore({
  reducer: {
    cecos: cecoReducer,
    machines: machineReducer,
    jobOrders: jobOrdersReducer,
    dailyStatuses: dailyStatusReducer,
    usageSheets: usageSheetsReducer,
    operativeState: operativeStateReducer,
    equipmentLifeSheets: equipmentLifeSheetReducer,
  },
});

export default store;
