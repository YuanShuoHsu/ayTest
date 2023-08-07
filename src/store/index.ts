import { configureStore } from "@reduxjs/toolkit";

// import arrangementReducer from "./slice/arrangement";

export const store = configureStore({
  reducer: {
    // arrangement: arrangementReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;