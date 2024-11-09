import {configureStore} from '@reduxjs/toolkit';   //configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

import todoReducer from '../features/todo/todoSlice.js';


export const store = configureStore({
    reducer: todoReducer
})

