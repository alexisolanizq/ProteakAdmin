import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    rightSidebarOpen: false,
  },
  reducers: {
    openRightSidebar: (state) => {
      state.rightSidebarOpen = true;
    },
    closeRightSidebar: (state) => {
      state.rightSidebarOpen = false;
    },
    toggleRightSidebar: (state) => {
      state.rightSidebarOpen = !state.rightSidebarOpen;
    },
  },
});

export const { openRightSidebar, closeRightSidebar, toggleRightSidebar } =
  uiSlice.actions;
  
export default uiSlice.reducer;
