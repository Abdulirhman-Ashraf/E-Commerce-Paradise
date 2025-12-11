import { createSlice } from "@reduxjs/toolkit";
const initialState={
    loading:"idle",
    error:"null"
}
const authSlice=createSlice({
name:"auth",
initialState,
reducers:{},
extraReducers:()=>{

}
})
export const authReducer=authSlice.reducer