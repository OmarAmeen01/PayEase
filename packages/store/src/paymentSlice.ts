import { createSlice } from "@reduxjs/toolkit";
 
 const initialState = {
    balance:0
 }

const paymentReducer  =createSlice({
    name:"Payment",
 initialState,

 reducers:{
    setBalance:(state,action)=>{
        state.balance= action.payload
    }
 }

})

export  const {setBalance} = paymentReducer.actions
export default  paymentReducer.reducer 