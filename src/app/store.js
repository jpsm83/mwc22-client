import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
});
