import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk("cars/getCars", async() => {
    const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
    console.log(response.data);
    return response.data;
});

const carsEntity = createEntityAdapter({
    selectId: (cars) => cars.id
});

const carsSlice = createSlice({
    name: "cars",
    initialState: carsEntity.getInitialState(),
    extraReducers: {
        [getCars.fulfilled]: (state, action) =>{
            carsEntity.setAll(state, action.payload);
        }
    }
});

export const carsSelectors = carsEntity.getSelectors(state => state.cars);
export default carsSlice.reducer;