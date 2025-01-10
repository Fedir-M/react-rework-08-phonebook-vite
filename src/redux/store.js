import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contact/contactsSlice";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistContactsConfig = {
//   key: 'contacts',
//   storage: storage,
//   whitelist: ['contacts'],
// };

// const persistedContactsReducer = persistReducer(
//   persistContactsConfig,
//   contactsReducer
// );

export const store = configureStore({
  // reducer: persistedContactsReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  reducer: contactsReducer,
});

// export const persistor = persistStore(store);
