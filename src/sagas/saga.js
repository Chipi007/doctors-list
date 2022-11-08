import { put, call, takeLatest } from "@redux-saga/core/effects";
import axios from 'axios';
import { sagaActions } from './sagaActions';
import { getDoctors, addDoctor, updateDoctor, deleteDoctor, catchError, startLoading } from "../features/doctor/doctorSlice";

const callAPI = async ({ url, method, data }) => {
    return await axios({
        url,
        method,
        data,
    })
}

export function* fetchDoctors () {
    yield put(startLoading(true))
    try{
        const result  = yield call(() =>
        callAPI({
          url: 'http://localhost:3001/doctors',
          method: 'get'
        })
      )
        yield put(getDoctors(result.data))
        yield put(startLoading(false))
    } catch (e) {
        yield put(catchError(e.message))
        yield put(startLoading(false))
    }
}

export function* addDoc ({payload}) {
    try{
        const result  = yield call(() =>
        callAPI({
          url: 'http://localhost:3001/doctors',
          method: 'post',
          data: payload
        })
      )
        yield put(addDoctor(result.data))
    } catch (e) {
        yield put(catchError(e.message))
    }
}

export function* updateDoc ({payload}) {
    try{
        const { id } = payload;
        const result  = yield call(() =>
        callAPI({
          url: `http://localhost:3001/doctors/${id}`,
          method: 'put',
          data: payload
        })
      )
        yield put(updateDoctor(result.data))
    } catch (e) {
        yield put(catchError(e.message))
    }
}

export function* deleteDoc ({payload}) {
    try{
        const { id } = payload;
        yield call(() =>
        callAPI({
          url: `http://localhost:3001/doctors/${id}`,
          method: 'delete',
        })
      )
        yield put(deleteDoctor(id))
    } catch (e) {
        yield put(catchError(e.message))
    }
}

export function* rootSaga() {
    yield takeLatest(sagaActions.FETCH_DOCTORS, fetchDoctors)
    yield takeLatest(sagaActions.ADD_DOCTOR, addDoc)
    yield takeLatest(sagaActions.UPDATE_DOCTOR, updateDoc)
    yield takeLatest(sagaActions.DELETE_DOCTOR, deleteDoc)
  }