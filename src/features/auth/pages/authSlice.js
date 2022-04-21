import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logging: false,
    isLoggedIn: false,
    currentUser: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action ) {
            state.logging = true
        },
        loginSucces(state, action) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action){
            state.logging = false
        },
        logout(state, action) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        }
    }
})

export const authActions = authSlice.actions

export const selectorisLoggedIn = (state) => state.auth.isLoggedIn;
export const selectorIsLogging = (state) => state.auth.logging;

const authReducer = authSlice.reducer

export default authReducer