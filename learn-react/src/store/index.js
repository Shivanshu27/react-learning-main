// this is deprecated for redux so use different code
import { createStore } from 'redux'


function reducer(state = 1, action) {
    if(action.type === 'increment')
        return state + 1;
    else if (action.type === 'decrement')
        return state - 1;
    return state;
}

export const store = createStore(reducer);