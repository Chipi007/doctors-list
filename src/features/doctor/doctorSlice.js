import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDoctors = createAsyncThunk(
    'doctors/fetchDoctors', 
    async function(_, {rejectWithValue}) {

        try {
            const response = await fetch ('http://localhost:3001/doctors');
            if (!response.ok) {
                throw new Error()
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteAsyncDoctors = createAsyncThunk(
    'doctors/deleteAsyncDoctors',
    async function(id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`http://localhost:3001/doctors/${id}`, {
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error()
            }
            dispatch(deleteDoctor(id))
        } catch (error) {
            return rejectWithValue(error.message);
            
        }

    }
)

const initialState = {
    doctorsList: [],
    staus: null,
    error: null,
}

export const doctorSlice = createSlice({
    name: 'doctors',
    initialState, 
    reducers: {
        addDoctor: (state, action) => {
            state.doctorsList.push(action.payload);
            const doctorsList = window.localStorage.getItem('doctors');
            const doctorsArray = doctorsList ? JSON.parse(doctorsList) : [];
            doctorsArray.push({
                ...action.payload
            });            
            window.localStorage.setItem('doctors', JSON.stringify(doctorsArray))
        },
        deleteDoctor: (state, action) => {
            // const doctorsList = window.localStorage.getItem('doctors');
            // if(doctorsList) {
            //     const doctorsArray = JSON.parse(doctorsList).filter((doctor, index) => doctor.id !== action.payload);
            //     window.localStorage.setItem('doctors', JSON.stringify(doctorsArray));
            //     state.doctorsList = doctorsArray;
            // }
            state.doctorsList = state.doctorsList.filter((doctor, index) => doctor.id !== action.payload)
        },
        updateDoctor: (state, action) => {
            const doctorsList = window.localStorage.getItem('doctors');
            if(doctorsList){
                const {...values} = action.payload;
                const doctorsArray = JSON.parse(doctorsList).map((doctor, index) => doctor.id === action.payload.id ? {...doctor, ...values} : doctor
                )
                window.localStorage.setItem('doctors', JSON.stringify(doctorsArray));
                state.doctorsList = doctorsArray;
            }

        }
    },
    extraReducers: {
        [fetchDoctors.pending]: (state) => {
            state.staus = 'loading';
            state.error = null;
        },
        [fetchDoctors.fulfilled]: (state, action) => {
            state.staus = 'received';
            state.doctorsList = action.payload;
        },
        [fetchDoctors.rejected]: (state, action) => {
            state.staus = 'rejected';
            state.error = action.payload;
        }
    }
})

export const {addDoctor, deleteDoctor, updateDoctor} = doctorSlice.actions;
export default doctorSlice.reducer;