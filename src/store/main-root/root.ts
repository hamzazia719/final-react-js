import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "../slicer/slice";
import { rentReducer } from "../slicer/rent";
import { homeReducer } from "../slicer/home";
import { realtorReducer } from "../slicer/realtor";

const store = configureStore({
  reducer: {
    api: apiReducer,
    rent: rentReducer,
    home: homeReducer,
    realtor: realtorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };


