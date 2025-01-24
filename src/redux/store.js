import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contact/contactsSlice";
import { authReducer } from '../redux/Auth/authSlice';
// import persistStore from "redux-persist/es/persistStore";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistContactsConfig = {
//   key: 'contacts',
//   storage: storage,
//   whitelist: ['contacts'],
// };

// const persistedContactsReducer = persistReducer(
//   persistContactsConfig,
//   contactsReducer
// );

const authPersistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
