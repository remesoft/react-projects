import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  createContact,
  deleteContact,
  updateContact,
} from "./contactsThunks";

const initialState = {
  contacts: [],
  status: "idle",
  error: null,
};

const contactsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder // Handle fetchContacts
      .addCase(fetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Handle createContact
      .addCase(createContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.error = action.error.message;
      })

      // handle delete contact
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })

      // Update contact
      .addCase(updateContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedContact = action.payload;
        state.contacts = state.contacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        );
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to update contact";
      });
  },
});

export default contactsSlice.reducer;
