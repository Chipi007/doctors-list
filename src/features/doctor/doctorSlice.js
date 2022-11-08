import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    doctorsList: [],
    error: null,
    loading: ''
}

export const doctorSlice = createSlice({
    name: 'doctors',
    initialState, 
    reducers: {
        getDoctors: (state, action) => {
            state.doctorsList = action.payload;
            console.log(action.payload)
        },
        addDoctor: (state, action) => {
            state.doctorsList.push(action.payload);
        },
        deleteDoctor: (state, action) => {
            state.doctorsList = state.doctorsList.filter(doctor => doctor.id !== action.payload)
        },
        updateDoctor: (state, action) => {
            const {...values} = action.payload;    
            const neededDoctor = state.doctorsList.map(doctor => doctor.id === action.payload.id ? {...doctor, ...values} : doctor)
            state.doctorsList = neededDoctor;
        },
        catchError: (state, action) => {
            state.error = action.payload;
        },
        startLoading: (state, action) => {
            action.payload === true ? state.loading = 'loading' : state.loading = '';
        }
    }
})

export const {addDoctor, deleteDoctor, updateDoctor, getDoctors, catchError, startLoading} = doctorSlice.actions;
export default doctorSlice.reducer;