import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Home {
  id: number;
  name: string;
  price: number;
  squareFeetArea: number;
  bathrooms: number;
  bedrooms: number;
  images: string;
  address: string;
  state: string;
}

interface HomeState {
  home: Home[] | null;
  error: string | null;
}

const initialState: HomeState = {
  home: null,
  error: null,
};

export const fetchHome = createAsyncThunk<
  Home[],
  void,
  { rejectValue: string }
>("rent/fetchRent", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Home[]>(
      "https://fc723e6e-fde5-426f-a6f1-879ac8875192.mock.pstmn.io"
    );
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch rent data");
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchHome.fulfilled,
        (state, { payload }: PayloadAction<Home[]>) => {
          state.home = payload;
          state.error = null;
        }
      )
      .addCase(fetchHome.rejected, (state, { payload }) => {
        state.error = payload as string;
      });
  },
});

export const homeReducer = homeSlice.reducer;
