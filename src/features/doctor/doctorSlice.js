import { createSlice } from "@reduxjs/toolkit";

const getInitialDoctors = () => {
    const localDoctors = window.localStorage.getItem('doctors');
    if(localDoctors){
        return JSON.parse(localDoctors)
    }
    window.localStorage.setItem('doctors', JSON.stringify([]));
    return [];
};

const initialState = {
    doctorsList: getInitialDoctors(),
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
            const doctorsList = window.localStorage.getItem('doctors');
            if(doctorsList) {
                const doctorsArray = JSON.parse(doctorsList).filter((doctor, index) => doctor.id !== action.payload);
                window.localStorage.setItem('doctors', JSON.stringify(doctorsArray));
                state.doctorsList = doctorsArray;
            }
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
    }
})

export const {addDoctor, deleteDoctor, updateDoctor} = doctorSlice.actions;
export default doctorSlice.reducer;