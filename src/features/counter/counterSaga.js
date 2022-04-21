import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { increment, incrementSaga, incrementSagaSucces } from "./counterSlice";

export function* handleIncrementSaga(action){
    console.log('waiting 2s');
    
    yield delay(2000);

    console.log('waiting done, dispatch action');

    yield put(incrementSagaSucces(action.payload));
}

export default function* counterSaga() {
    console.log("Counter Saga");

    // yield takeEvery("*", log); //lắng nghe toàn bộ action
    // yield takeEvery("counter/increment", log); //lắng nghe toàn bộ action
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga); 
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}