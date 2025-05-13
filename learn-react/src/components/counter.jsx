import React from 'react';
import { useSelector } from 'react-redux'
import {getCount} from '../redux/slices/CounterSlice.js'

const Counter = () => {
    const count = useSelector(getCount)
    return (
        <h1>{count}</h1>
    )
}

export default Counter;