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

const initialState = {
  allUsers: [],
  userSearch: [],
  fieldsOptionsToFilter: "Any"
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // those are actions waiting to be dispatched
    setSearchHandle: (state, action) => {
      state.userSearch = action.payload;
    },

    setFilterOption: (state, action) => {
      state.fieldsOptionsToFilter = action.payload
    }
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
  },
});

// those are actions exported that can be used anywhere
export const { clearState, setSearchHandle, setFilterOption } = usersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: user) => state.user.value)`
export const getAllUsers = (state) => state.users.allUsers;
export const searchedtUsers = (state) => state.users.userSearch;
export const filterOptionSelected = (state) => state.users.fieldsOptionsToFilter;

export default usersSlice.reducer;
