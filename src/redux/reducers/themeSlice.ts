import { createSlice } from "@reduxjs/toolkit";

interface State {
  darkModeOn: boolean;
}

const initialState: State = {
  darkModeOn: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.darkModeOn = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
