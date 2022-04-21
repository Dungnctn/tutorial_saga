import {all} from 'redux-saga/effects'
import authSaga from '../features/auth/pages/authSaga';
import counterSaga from '../features/counter/counterSaga';
import studentSaga from '../features/studentManager/studentSaga';

function helloSaga() {
    console.log("Hello Saga");
}

export default function* rootSaga() {
    // chay tat ca cac effect cung 1 luc
    yield all([
        helloSaga(), 
        counterSaga(),
        authSaga(),
        studentSaga(),
    ]) //tích hợp 1 loạt các saga con
}