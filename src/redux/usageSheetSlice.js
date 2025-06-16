import { createSlice } from "@reduxjs/toolkit";
import { STORE_USAGE_SHEETS } from "src/constants/store";

const initialState = {
  isLoading: false,
  usageSheets: [],
};

const usageSheetsSlice = createSlice({
  name: STORE_USAGE_SHEETS,
  initialState,
  reducers: {
    setUsageSheets: (state, action) => {
      state.usageSheets = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading, setUsageSheets } = usageSheetsSlice.actions;

export default usageSheetsSlice.reducer;
