import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContacts, addContacts } from "./operations";


// Визначення функції getActions, яка повертає умову isAnyOf для зазначеного типу дії
const getAction = type => isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

// Початковий стан для slice contactsSlice
const initialState = { items: [], isLoading: false, error: null };

// Створення slice для керування контактами
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder =>
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            // Обробка успішного виконання fetchContacts
            state.items = action.payload; // Оновлення списку контактів у стані
        }).addCase(addContacts.fulfilled, (state, action) => {
            // Обробка успішного виконання addContacts
            state.items.push(action.payload); // Додавання нового контакту до списку контактів
        }).addCase(deleteContacts.fulfilled, (state, action) => {
            // Обробка успішного виконання deleteContacts
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1); // Видалення контакту зі списку контактів
        }).addMatcher(getAction('pending'), state => {
            // Обробка дій зі статусом 'pending' очікування
            state.isLoading = true;
        }).addMatcher(getAction('rejected'), (state, action) => {
            // Обробка дій зі статусом 'rejected' відхилено
            state.isLoading = false;
            state.error = action.payload;
        }).addMatcher(getAction('fulfilled'), state => {
            // Обробка дій зі статусом 'fulfilled' виконано
            state.isLoading = false;
            state.error = null;
        }),
});


// Експорт дій addContact і deleteContact з slice contactsSlice
export const { addContact, deleteContact } = contactsSlice.actions;

// Експорт редуктора (reducer) contactsReducer з slice contactsSlice
export const contactsReducer = contactsSlice.reducer;