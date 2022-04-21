import axios from 'axios';
import { call, delay, takeEvery,takeLatest, fork, put, take } from "redux-saga/effects"
import { studentAction } from './studentSlice';

export function* handleGetAllStudent() {
    try {
        yield delay(500);
        const students = yield axios.get('http://localhost:3001/students') ;
        yield put(studentAction.getLoadingListStudent(students.data));
        
    } catch (error) {
        console.log(error);
    }
}

export function* handleCreateStudent({payload}) {
    // console.log('saga',payload.payload);

    yield delay(1000);  

    const {data} = yield axios.post('http://localhost:3001/students', payload);
    // console.log(data);
    yield put(studentAction.getLoadingListStudent(data))

}

export function* handleRemoveStudent({payload}) {
    console.log('saga', payload);
    try {
        yield delay(1000);
        console.log('handle remove');
        
        yield axios.delete(`http://localhost:3001/students/${payload}`);
        
    } catch (error) {
        
    }
}

export function* handleEditStudent({payload}) {
    try {
        yield delay(1000);
        // console.log(payload);
        
        const {data} = yield axios.put(`http://localhost:3001/students/${payload.id}`, payload);
        console.log('edi',data);
        // yield put(studentAction.addloadingStudent(data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchStudentFlow() {
    console.log('watch Student');
        
        yield takeEvery(studentAction.getAllStudent.type, handleGetAllStudent);


        yield takeEvery(studentAction.addloadingStudent.type, handleCreateStudent);

        yield takeEvery(studentAction.removeStudent.type, handleRemoveStudent);

        yield takeLatest(studentAction.editStudent.type, handleEditStudent);
}

export default function* studentSaga() {
    yield fork(watchStudentFlow)
}