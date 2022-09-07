import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from '../features/doctor/doctorSlice'

export const store = configureStore({
    reducer: {
        doctor: doctorReducer,
    }
}
);