import axios from "axios";
import { useNavigate } from "react-router-dom";
import { call, delay, fork, put, take } from "redux-saga/effects"
import authApi, { register } from "../../../api/authApi";
import { authActions } from "./authSlice";

// eslint-disable-next-line require-yield
export function* handleLogin (payload) {
    try {
        yield delay(1000);
        console.log('handle Login');

        // call api
        let login = function(payload) {
            return authApi.getlogin(payload)
        };
        let userToken = login(payload);

        userToken.then(function(result) {
            localStorage.setItem("access_token", JSON.stringify(result));
        })

        
        // console.log(login)
        // const data = authApi.register(payload);
        // console.log(data);
        // yield put(authActions.loginSucces(payload));
    } catch (error) {
        yield put(authActions.loginFailed(error.message));
    }
    
}

// eslint-disable-next-line require-yield
export function* handleLogout () {
    yield delay(1000)
    console.log('handle Logout');
    localStorage.removeItem("access_token");
}

export function* watchLoginFlow () {
    console.log('watcher login')
    while(true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        // Neu da dang nhap thi se ko lang nghe login
        if(!isLoggedIn){
            // mo hinh watcher...worker doi dispatch action se thuc hien hien 1 task nao do
            const action = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout); //neu dung fork thi khi thuc hien xong logout khong quay lai watcher, sd call
    }
}

export default function* authSaga () {
    yield fork(watchLoginFlow);
}