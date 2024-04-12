import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const contactsPeristConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts.items"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPeristConfig, contactsReducer),
    filters: persistReducer(contactsPeristConfig, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
