import { createSlice, createSelector } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        }
    }
});


export const getCount = createSelector(store => store.counter, counterSlice => counterSlice)

export const { decrement, increment } = counterSlice.actions
export default counterSlice.reducer;