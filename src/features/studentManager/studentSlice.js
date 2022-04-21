import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

const studentSlice = createSlice({
    loadding:false,
    name: "student",
    initialState,
    reducers: {
        getAllStudent(state, action) {
            state.loadding = true;
            console.log('all',action.payload);
        },

        getLoadingListStudent(state, action){
            state.loadding = false;
            state.value = action.payload;
        },

        getByIdStudent(state, action) {
            state.value = action.payload
        },
        
        addloadingStudent(state, action) {
            // console.log('loading',action.payload);
            state.loadding = true
            state.value.push( action.payload );
        },

        addLoadStudent(state, action) {
            // console.log('handle student');
            // console.log('load',action.payload);
            state.loadding = false;
            // state.value.unshift(action.payload);
        },

        editStudent(state, action) {
            state.loadding = false;
            state.value = state.value.map(item => item.id === action.payload.id ? action.payload : item );
        },

        removeStudent(state, action) {
            console.log('id',action.payload);
            // console.log(state.value = action.payload);
            const alert = window.confirm("Ban co muon xoa san pham");
            if(alert){  
                state.value = state.value.filter(item => item.id !== action.payload);
            }
            // state.value.filter((todo, i) => i !== action.payload.id)
        },
    }
})

export const studentAction = studentSlice.actions;

const studentReducer = studentSlice.reducer;

export default studentReducer;
