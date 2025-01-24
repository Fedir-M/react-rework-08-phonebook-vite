import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

//*  POST/users/signup
// form = credetials = { name, email, password } (это чисто для себя заметка)
//  body: { name, email, password }

export const registerUser = createAsyncThunk(
  "auth/register",
  async (form, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", form);
      setAuthHeader(response.data.token);
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//*  POST/users/login
//  body: { email, password }

export const loginUser = createAsyncThunk(
  "auth/login",
  async (form, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", form);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//*  POST/users/logout
//  headers: Authorization: Bearer token

export const logOutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
      localStorage.removeItem("token");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//*  GET/users/current
//  headers: Authorization: Bearer token

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const {data} = await axios.get("/users/current");

      return data;
    } catch (error) {
      clearAuthHeader();
      localStorage.removeItem("token");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// martynov@mail.com
// examplepwd12345