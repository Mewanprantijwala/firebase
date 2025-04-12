import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "../features/tourSlice"; // Adjust path if needed

const store = configureStore({
  reducer: {
    tour: tourReducer,
  },
});
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async actions
export const viewTours = createAsyncThunk("tour/viewTours", async () => {
  // Simulating data fetching or pulling from Firebase, etc.
  // Replace with API call if needed
  const tours = [
    { id: 1, destination: "Beach", guide: "Alex", price: 200, category: "Leisure" },
    { id: 2, destination: "Mountain", guide: "Sarah", price: 300, category: "Adventure" },
  ];
  return tours;
});

export const deleteTour = createAsyncThunk("tour/deleteTour", async (id) => {
  // Here, implement deletion logic from backend or state
  return id; // Return the id of the deleted item
});

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    tourList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewTours.fulfilled, (state, action) => {
        state.tourList = action.payload;
      })
      .addCase(deleteTour.fulfilled, (state, action) => {
        state.tourList = state.tourList.filter((tour) => tour.id !== action.payload);
      });
  },
});


export default store;
