import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logOutUser,
  refreshUser,
  registerUser,
} from "./authOperations";

const initialState = {
  isAuth: false,
  user: {name: null, email: null},
  token: null,
  error: null,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  
  extraReducers: (builder) => {
    builder
      // registerUser.fulfilled
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
          isRefreshing: false,
          error: null,
        };
      })
      //   loginUser.fulfilled
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isRefreshing: false,
          user: payload.user,
          token: payload.token,
          error: null,

        };
      })
      //   logOutUser.fulfilled
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
      })
      //   refreshUser.fulfilled
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        // eslint-disable-next-line no-unused-vars
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/reject"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          // state.isRefreshing = false;
        }
      );
  },
});
export const authReducer = authSlice.reducer;

// martynov@mail.com
// examplepwd12345