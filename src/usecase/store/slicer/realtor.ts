import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Realtor {
  id: number;
  name: string;
  title: string;
  for_sale: number;
  sold: number;
  experience: string;
  phone_number: string;
  address: string;
}

interface RealtorState {
  realtor: Realtor[] | null;
  error: string | null;
}

const initialState: RealtorState = {
  realtor: null,
  error: null,
};

export const fetchRealtor = createAsyncThunk<
  Realtor[],
  void,
  { rejectValue: string }
>("realtor/fetchRealtor", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Realtor[]>(
      "https://0578134e-30a5-4ab8-829c-7844838d419b.mock.pstmn.io"
    );
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch rent data");
  }
});

const realtorSlice = createSlice({
  name: "realtor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRealtor.fulfilled,
        (state, { payload }: PayloadAction<Realtor[]>) => {
          state.realtor = payload;
          state.error = null;
        }
      )
      .addCase(fetchRealtor.rejected, (state, { payload }) => {
        state.error = payload as string;
      });
  },
});

export const realtorReducer = realtorSlice.reducer;
