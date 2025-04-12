import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Define createTour action
export const createTour = createAsyncThunk("tour/createTour", async (data) => {
  // If using a backend, you'd do: return await axios.post('/api/tours', data)
  return data; // For now, just return the passed data
});

// ✅ Initial state (can be an array or object depending on your use case)
const initialState = [];

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTour.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

// ✅ Export reducer (default) and action (named)
export default tourSlice.reducer;
