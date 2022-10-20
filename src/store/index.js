import { configureStore , createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
}
const counterSlice = createSlice({
    name:'counter' ,
    initialState ,
    reducers : {
      increment:(state)=>{
        state.counter++
      },
      decrement:(state)=>{
        state.counter--
      },
      addBy: (state, action) => {
        state.counter += action.payload
      }
    }
})
export const actions = counterSlice.actions
const store=configureStore({
    reducer : counterSlice.reducer
})
export default store