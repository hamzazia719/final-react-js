import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Data {
  id: number;
  price: number;
  area_square_feet: number;
  bathroom_number: number;
  bedroom_number: number;
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
        "https://ee6886d1-783c-47b2-898f-1ede65cb2de1.mock.pstmn.io"
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
