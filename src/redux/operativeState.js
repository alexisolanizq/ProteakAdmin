import { createSlice } from "@reduxjs/toolkit";
import { STORE_OPERATIVE_STATE_MACHINE } from "src/constants/store";

const initialState = {
  isLoading: false,
  operativeState: [],
};

const operativeStateSlice = createSlice({
  name: STORE_OPERATIVE_STATE_MACHINE,
  initialState,
  reducers: {
    setOperativeState: (state, action) => {
      state.operativeState = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading, setOperativeState } = operativeStateSlice.actions;

export default operativeStateSlice.reducer;
