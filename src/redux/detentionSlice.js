import { createSlice } from "@reduxjs/toolkit";
import { STORE_DETENTIONS } from "src/constants/store";

const initialState = {
  detentions: [],
  isLoading: false,
};

const detentionSlice = createSlice({
  name: STORE_DETENTIONS,
  initialState,
  reducers: {
    setDetentions: (state, action) => {
      state.detentions = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setDetentions, setIsLoading } = detentionSlice.actions;

export default detentionSlice.reducer;
