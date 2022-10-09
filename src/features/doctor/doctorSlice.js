import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDoctors = createAsyncThunk(
    'doctors/fetchDoctors', 
    async(_, {rejectWithValue}) => {

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

export const deleteAsyncDoctor = createAsyncThunk(
    'doctors/deleteAsyncDoctors',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetch(`http://localhost:3001/doctors/${id}`, {
                method: 'DELETE',

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

export const addAsyncDoctor = createAsyncThunk(
    'doctors/addAsyncDoctor',
    async ({id, ...values}, {rejectWithValue, dispatch}) => {
        try {
            const data = {id, ...values};
            const response = await fetch(`http://localhost:3001/doctors`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error()
            }
            const answer = await response.json();
            dispatch(addDoctor(answer))
        } catch (error) {
            return rejectWithValue(error.message) 
        }
    }
)

export const updateAsyncDoctor = createAsyncThunk(
    'doctors/updateAsyncDoctor',
    async ({id, ...values}, {rejectWithValue, dispatch}) => {
        try {
            const data = {...values}
            const response = await fetch(`http://localhost:3001/doctors/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error()
            }
            const answer = await response.json();
            dispatch(updateDoctor(answer))
        } catch (error) {
            return rejectWithValue(error.message) 
        }
    }
)

const initialState = {
    doctorsList: [],
    status: null,
    error: null,
}

export const doctorSlice = createSlice({
    name: 'doctors',
    initialState, 
    reducers: {
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
        }
    },
    extraReducers: {
        [fetchDoctors.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchDoctors.fulfilled]: (state, action) => {
            state.status = 'received';
            state.doctorsList = action.payload;
        },
        [fetchDoctors.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const {addDoctor, deleteDoctor, updateDoctor} = doctorSlice.actions;
export default doctorSlice.reducer;