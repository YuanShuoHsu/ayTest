import { configureStore } from "@reduxjs/toolkit";

import templateReducer from "./slice/template";

export const store = configureStore({
  reducer: {
    template: templateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
