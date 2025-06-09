import { createSlice } from "@reduxjs/toolkit";
import { STORE_CECOS } from "src/constants/store";

const initialState = {
  isLoading: false,
  cecos: [],
};

const cecoSlice = createSlice({
  name: STORE_CECOS,
  initialState,
  reducers: {
    setCecos: (state, action) => {
      state.cecos = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCecos, setIsLoading } = cecoSlice.actions;

export default cecoSlice.reducer;
