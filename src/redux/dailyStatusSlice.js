import { createSlice } from "@reduxjs/toolkit";
import { STORE_DAILY_STATUSES } from "src/constants/store";

const initialState = {
  dailyStatuses: [],
  isLoading: false,
};

const dailyStatusSlice = createSlice({
  name: STORE_DAILY_STATUSES,
  initialState,
  reducers: {
    setDailyStatuses: (state, action) => {
      state.dailyStatuses = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setDailyStatuses, isLoading } = dailyStatusSlice.actions;

export default dailyStatusSlice.reducer;
