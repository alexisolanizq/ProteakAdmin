import { createSlice } from "@reduxjs/toolkit";
import { STORE_WORKSHOPS } from "src/constants/store";

const initialState = {
  workshops: [],
  isLoading: false,
};

const workshopSlice = createSlice({
  name: STORE_WORKSHOPS,
  initialState,
  reducers: {
    setWorkshops: (state, action) => {
      state.workshops = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setWorkshops, setIsLoading } = workshopSlice.actions;

export default workshopSlice.reducer;
