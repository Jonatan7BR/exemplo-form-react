import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/themeSlice";
import loaderSlice from "./reducers/loaderSlice";
import messageSlice from "./reducers/messageSlice";
import peopleSlice from "./reducers/peopleSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    loader: loaderSlice,
    message: messageSlice,
    people: peopleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
