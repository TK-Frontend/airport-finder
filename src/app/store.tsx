import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { airportsApi } from "../services/airportsApi";

export const store = configureStore({
  reducer: {
    [airportsApi.reducerPath]: airportsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(airportsApi.middleware),
});

setupListeners(store.dispatch);
