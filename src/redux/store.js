import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "src/redux/uiSlice";
import cecoReducer from "src/redux/cecoSlice";
import machineReducer from "src/redux/machineSlice";
import workshopReducer from "src/redux/workshopSlice";
import employeeReducer from "src/redux/employeeSlice";
import jobOrdersReducer from "src/redux/jobOrderSlice";
import detentionsReducer from "src/redux/detentionSlice";
import usageSheetsReducer from "src/redux/usageSheetSlice";
import dailyStatusReducer from "src/redux/dailyStatusSlice";
import operativeStateReducer from "src/redux/operativeState";
import equipmentLifeSheetReducer from "src/redux/equipmentLifeSheetSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cecos: cecoReducer,
    machines: machineReducer,
    workshops: workshopReducer,
    employees: employeeReducer,
    jobOrders: jobOrdersReducer,
    detentions: detentionsReducer,
    usageSheets: usageSheetsReducer,
    dailyStatuses: dailyStatusReducer,
    operativeState: operativeStateReducer,
    equipmentLifeSheets: equipmentLifeSheetReducer,
  },
});

export default store;
