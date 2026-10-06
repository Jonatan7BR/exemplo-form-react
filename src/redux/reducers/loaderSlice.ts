import { createSlice } from "@reduxjs/toolkit";

interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes("/pending"),
        (state) => {
          state.loading = true;
        },
      )
      .addMatcher(
        (action) => action.type.includes("/fulfilled"),
        (state) => {
          state.loading = false;
        },
      )
      .addMatcher(
        (action) => action.type.includes("/rejected"),
        (state) => {
          state.loading = false;
        },
      );
  },
});

export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
