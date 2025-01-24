import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts, updateContact,  } from "./contactsOperations";

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
    filterContacts:{ 
      reducer(state, {payload}) {
      state.filter =payload;
    },
    prepare(e) {
      return {
        payload: e.target.value.trim()
      }
    }
  }},
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
      // updateContact
      .addCase(updateContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items.filter(
          (contact) => contact.id !== action.payload.id
        ), action.payload];
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
