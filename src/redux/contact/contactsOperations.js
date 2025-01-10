import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65e9dd7cc9bf92ae3d3a7a0f.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "/contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
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
        phone: contact.number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
      try {
        await axios.delete(`/contacts/${id}`)
        return id
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );