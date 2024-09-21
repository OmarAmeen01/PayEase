import paymentReducer from "./paymentSlice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        payment:paymentReducer
    }
})
export default store