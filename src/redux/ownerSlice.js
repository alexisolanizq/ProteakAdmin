import { createSlice } from "@reduxjs/toolkit";
import { STORE_OWNERS } from "src/constants/store";

const initialState = {
  owners: [],
  isLoading: false,
};

const ownerSlice = createSlice({
  name: STORE_OWNERS,
  initialState,
  reducers: {
    setOwners: (state, action) => {
      state.owners = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setOwners, setIsLoading } = ownerSlice.actions;

export default ownerSlice.reducer;
