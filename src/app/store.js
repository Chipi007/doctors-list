import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from '../features/doctor/doctorSlice';
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        doctor: doctorReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
