import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // pending
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      // addContact
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      // deleteContact
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/reject"),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      );
  },
});

export const { filterContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
