import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  counter: 0,
  step: 1,
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, counter: state.counter + state.step };
    case 'DECREMENT_COUNTER':
      return { ...state, counter: state.counter - state.step };
    case 'INCREMENT_STEP':
      return { ...state, step: state.step + 1 };
    case 'DECREMENT_STEP':
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
}

// Define the Counter component
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT_COUNTER' })}>Increment Counter</button>
      <button onClick={() => dispatch({ type: 'DECREMENT_COUNTER' })}>Decrement Counter</button>
      <h2>Step: {state.step}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT_STEP' })}>Increment Step</button>
      <button onClick={() => dispatch({ type: 'DECREMENT_STEP' })}>Decrement Step</button>
    </div>
  );
};

export default Counter;

/*
Explanation of useReducer Hook:
1. The `useReducer` hook is an alternative to `useState` for managing complex state logic.
2. It takes two arguments: a reducer function and an initial state.
3. The reducer function takes the current state and an action, and returns a new state based on the action type.
4. The `useReducer` hook returns the current state and a dispatch function to send actions to the reducer.

Pros and Cons of useContext vs Redux:

useContext:
Pros:
1. Simpler to set up and use for small to medium-sized applications.
2. No need for additional libraries or boilerplate code.
3. Great for sharing state between a few components.

Cons:
1. Can become difficult to manage as the application grows.
2. Limited to React components and cannot be used outside of React.
3. No built-in middleware support for handling side effects.

Redux:
Pros:
1. Centralized state management with a single source of truth.
2. Scales well for large applications with complex state logic.
3. Middleware support (e.g., redux-thunk, redux-saga) for handling side effects.
4. Can be used with any UI framework, not just React.

Cons:
1. Requires additional libraries and boilerplate code.
2. Steeper learning curve compared to `useContext`.
3. Can be overkill for small to medium-sized applications.

Yes, it is correct that in useContext, every component that consumes the context will re-render when the context value changes. This can lead to unnecessary re-renders if many components are consuming the context and only a few of them actually need to respond to the change.

In contrast, Redux allows for more granular control over which components re-render. With Redux, you can use selectors to only re-render components when specific parts of the state change, which can improve performance in large applications.

In summary, `useContext` is suitable for simpler state management needs, while Redux is more powerful and scalable for larger applications with complex state requirements.
*/