import { createSlice } from "@reduxjs/toolkit";

const initialState={
   status:''
}

export const Slice=createSlice({
    name:'logged',
    initialState,

    reducers:{
        login:(state)=>{
            state.status=true
        },
        logout:(state)=>{
            state.status=false
        },
    },
})

export const {login,logout}=Slice.actions

export default Slice.reducer