import { createSlice } from "@reduxjs/toolkit";
import { STORE_EMPLOYEES } from "src/constants/store";

const initialState = {
  employees: [],
  isLoading: false,
};

const employeeSlice = createSlice({
  name: STORE_EMPLOYEES,
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setEmployees, setIsLoading } = employeeSlice.actions;

export default employeeSlice.reducer;
