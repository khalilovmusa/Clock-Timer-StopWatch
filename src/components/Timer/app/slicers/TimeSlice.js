import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'Time',
    initialState,
    reducers: {
        reset: (state) => {
            state.value = 0;
        },
        decrementByAmount: (state, action) => {
            if ( state.value - action.payload >= 0 ) {
                state.value -= action.payload;
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        handleTime: (state, action) => {
            if (action.payload === "start" && state.value - 1 >= 0 ) {
                state.value -= 1;
            }
        },
    }
})

export const { reset, decrementByAmount, incrementByAmount, handleTime } = counterSlice.actions

export default counterSlice.reducer