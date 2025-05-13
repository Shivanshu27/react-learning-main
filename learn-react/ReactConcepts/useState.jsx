import React, { useState } from 'react';

function Counter() {
    // Declare a state variable named "count" with an initial value of 0
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;

/*
Explanation of useState Hook:
1. The `useState` hook is a function that allows you to add state to functional components.
2. It returns an array with two elements: the current state value and a function to update that state.
3. In this example, `useState(0)` initializes the state variable `count` with a value of 0.
4. `setCount` is the function used to update the state variable `count`.

Lifecycle Explanation:
1. Initial Render: When the component is first rendered, `useState` initializes `count` to 0.
2. State Update: When `setCount` is called (e.g., by clicking the increment or decrement button), React schedules a re-render of the component.
3. Re-render: During the re-render, `useState` returns the current state value (updated `count`) and the same `setCount` function.
4. Cleanup: If the component is unmounted, React cleans up any state associated with the component.

The `useState` hook ensures that the state is preserved across re-renders and provides a way to update the state and trigger re-renders.
*/
