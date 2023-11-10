import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Базовий URL для axios
axios.defaults.baseURL = 'https://654b86185b38a59f28ef3c4e.mockapi.io';

// Створення асинхронної Thunk-дії fetchContacts
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            // Надсилання GET-запиту на '/contacts'
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Створення асинхронної Thunk-дії addContacts
export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async ({ name, phone }, thunkAPI) => {
        try {
            // Надсилання POST-запиту на '/contacts' з даними { name, number }
            const response = await axios.post('/contacts', {name, phone});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


// Створення асинхронного Thunk-действия deleteContacts
export const deleteContacts = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactId, thunkAPI) => {
        try {
            // Надсилання DELETE-запиту на `/contacts/${contactId}`
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);