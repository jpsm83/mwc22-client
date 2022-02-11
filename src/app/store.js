import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlicee";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
