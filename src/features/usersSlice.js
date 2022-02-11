// redux-toolkit give us extra features that makes easyer to work with redux
// createAsyncThunk is a middleware from redux to make unsyncronous calls
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../services/user.service";

const userService = new UserService();

// redux/toolkit allow us to combine "action", "constants" and "reducers" into one file
// createAsyncThunk is a middleware from redux to make unsyncronous calls

export const fetchAsyncUsers = createAsyncThunk(
  "users/fetchAsyncUsers",
  async () => {
    const response = await userService.get();
    return response.data;
  }
);

// createAsyncThunk is a middleware from redux to make unsyncronous calls

export const fetchAsyncUserDetails = createAsyncThunk(
  "userDetails/fetchAsyncDetails",
  async (id) => {
    const response = await userService.get(id);
    return response.data;
  }
);

const initialState = {
  allUsers: [],
  userDetail: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // those are actions waiting to be dispatched
    clearDetails: (state) => {
      state.userDetail = {};
    },
  },

  extraReducers: {
    // "pending", "fulfilled", "rejected" defined the life cicle of the function "fetchAsyncUsers"
    [fetchAsyncUsers.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncUsers.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, allUsers: payload };
    },
    [fetchAsyncUsers.rejected]: () => {
      console.log("Rejected!");
    },

    // "pending", "fulfilled", "rejected" defined the life cicle of the function "fetchAsyncUserDetails"
    [fetchAsyncUserDetails.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncUserDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectedMovieOrSerie: payload };
    },
    [fetchAsyncUserDetails.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { clearDetails } = usersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: user) => state.user.value)`
export const getAllUsers = (state) => state.users.allUsers;
export const selectUser = (state) => state.users.userDetail;

export default usersSlice.reducer;
