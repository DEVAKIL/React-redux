import {configureStore} from '@reduxjs/toolkit';
import customerReducer from '../Redux2/slice/CustomerSlice';

export const store=configureStore({
    devTools:true,
    reducer:{
        customers:customerReducer
    }
})