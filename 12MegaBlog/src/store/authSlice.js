import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status : false,
    usreData: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    
        login: (state, action) => {
            state.status = true;
            state.usreData = action.payload.usreData;
        },
        logout: (state) => {
            state.status = false;
            state.usreData = null;
        }

    }
})


export const {login, logout} = authSlice.actions

export default authSlice.reducer;