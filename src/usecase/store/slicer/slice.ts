import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Data {
  id: number;
  name: string;
  price: number;
  squarefeet: number;
  bathroom: number;
  bedroom: number;
  image: string;
  location: string;
}

interface ApiState {
  data: Data[] | null;
  error: string | null;
}

const initialState: ApiState = {
  data: null,
  error: null,
};

export const api = createAsyncThunk<Data[], void, { rejectValue: string }>(
  "apiCall",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Data[]>(
        "https://979c1b97-aea9-464d-b733-0777349b6481.mock.pstmn.io"
      );
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch data");
    }
  }
);

const reducerAPiCall = createSlice({
  name: "apiCall",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(api.fulfilled, (state, action: PayloadAction<Data[]>) => {
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(api.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export const apiReducer = reducerAPiCall.reducer;
