import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { firstName, lastName, email, username } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.username = username;
    },

    logoutUser: (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.username = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
