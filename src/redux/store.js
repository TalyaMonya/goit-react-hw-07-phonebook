import { configureStore} from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
