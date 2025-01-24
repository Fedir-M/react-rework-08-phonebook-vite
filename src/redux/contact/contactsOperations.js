import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // const token = state.auth.token;
    const persistedToken = state.auth.token;
    // const token = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token available");
    }

    try {
      // setAuthHeader(persistedToken);
      const { data } = await axios.get("/contacts");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", {
        name: contact.name,
        number: contact.number,
      });


      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, contact }, thunkAPI) => {
    // console.log(contactId);
    console.log(contactId);
    
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token available");
      }

      // setAuthHeader(token);
      const { data } = await axios.patch(`/contacts/${contactId}`, {
        name: contact.name,
        number: contact.number,
      });
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      //* 97-104 строки - это проверка на наличие токена в стейте, можно вынести в отдельную
      //* функцию и использовать во всех операциях, где нужен токен
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token available");
      }

      // setAuthHeader(token);
      //* - конец проверки на наличие токена

      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
