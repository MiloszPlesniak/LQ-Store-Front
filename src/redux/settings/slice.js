import { createSlice } from "@reduxjs/toolkit";
const initialState = { sideMenuOpen: true };

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
  },
});
export const { toggleSideMenu } = settingsSlice.actions;
export default settingsSlice.reducer;
