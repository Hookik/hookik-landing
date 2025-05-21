import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { contactApi } from "@/services/contact.api";
import { blogApi } from "@/services/blog.api";

const rootReducer = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })
      .concat(contactApi.middleware)
      .concat(blogApi.middleware),
});

export const persistor = persistStore(store);
