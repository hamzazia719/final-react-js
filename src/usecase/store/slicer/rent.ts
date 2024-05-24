import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Rent {
  id: number;
  name: string;
  price: number;
  squareFeetArea: number;
  bathrooms: number;
  bedrooms: number;
  images: string;
  streetAddress: string;
}

interface RentState {
  rent: Rent[] | null;
  error: string | null;
}

const initialState: RentState = {
  rent: null,
  error: null,
};

export const fetchRent = createAsyncThunk<
  Rent[],
  void,
  { rejectValue: string }
>("rent/fetchRent", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Rent[]>(
      "https://6942e21d-a239-40c6-bce1-b99a9259c908.mock.pstmn.io"
    );
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch rent data");
  }
});

const rentSlice = createSlice({
  name: "rent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRent.fulfilled,
        (state, { payload }: PayloadAction<Rent[]>) => {
          state.rent = payload;
          state.error = null;
        }
      )
      .addCase(fetchRent.rejected, (state, { payload }) => {
        state.error = payload as string;
      });
  },
});

export const rentReducer = rentSlice.reducer;
