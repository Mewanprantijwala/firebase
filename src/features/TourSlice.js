// TourSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Thunk to view all tours
export const viewtour = createAsyncThunk('tour/viewTours', async () => {
    const response = await axios.get('http://your-api-url/tours')
    return response.data
})

// Thunk to delete a tour
export const deletetour = createAsyncThunk('tour/deleteTour', async (id) => {
    await axios.delete(`http://your-api-url/tours/${id}`)
    return id
})

// Thunk to create a tour
export const createTour = createAsyncThunk('tour/createTour', async (data) => {
    const response = await axios.post('http://your-api-url/tours', data)
    return response.data
})

// Slice
const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        Tourlist: [],
        status: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(viewtour.fulfilled, (state, action) => {
                state.Tourlist = action.payload
            })
         
            .addCase(createTour.fulfilled, (state, action) => {
                state.Tourlist.push(action.payload)
            })
            .addCase(deletetour.fulfilled, (state, action) => {
              state.Tourlist = state.Tourlist.filter(tour => tour.id !== action.payload)
          })
          
    }
})

export default tourSlice.reducer
