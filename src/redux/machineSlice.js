import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  machines: [],
};

const machineSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    setMachines: (state, action) => {
      state.machines = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMachines, setIsLoading } = machineSlice.actions;

export default machineSlice.reducer;
