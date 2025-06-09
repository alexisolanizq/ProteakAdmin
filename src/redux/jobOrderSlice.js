import { createSlice } from "@reduxjs/toolkit";
import { STORE_JOB_ORDERS } from "src/constants/store";

const initialState = {
  isLoading: false,
  jobOrders: [],
};

const jobOrderSlice = createSlice({
  name: STORE_JOB_ORDERS,
  initialState,
  reducers: {
    setJobOrders: (state, action) => {
      // console.log(action.payload.work_orders.data);
      
      state.jobOrders = action.payload;
    },
    addJobOrders: (state, action) => {
      state.jobOrders = [action.payload, ...state.jobOrders];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setJobOrders, setIsLoading, addJobOrders } = jobOrderSlice.actions;

export default jobOrderSlice.reducer;
