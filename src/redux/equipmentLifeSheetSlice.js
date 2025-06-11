import { createSlice } from "@reduxjs/toolkit";
import { STORE_EQUIPMENT_LIFE_SHEETS } from "src/constants/store";

const initialState = {
  isLoading: false,
  equipmentLifeSheets: [],
};

const equipmentLifeSheetSlice = createSlice({
  name: STORE_EQUIPMENT_LIFE_SHEETS,
  initialState,
  reducers: {
    setEquipmentLifeSheets: (state, action) => {
      state.equipmentLifeSheets = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setEquipmentLifeSheets, setIsLoading } =
  equipmentLifeSheetSlice.actions;

export default equipmentLifeSheetSlice.reducer;
