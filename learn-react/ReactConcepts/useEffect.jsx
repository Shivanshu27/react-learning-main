import React, { useEffect, useState } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // This effect runs after every render
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function to clear the interval
        return () => {
            clearInterval(interval);
        };
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return (
        <div>
            <p>Timer: {count} seconds</p>
        </div>
    );
}

export default Timer;

/*
Explanation of useEffect Hook:
1. The `useEffect` hook allows you to perform side effects in functional components.
2. It takes two arguments: a function containing the side effect logic and an optional dependency array.
3. If the dependency array is empty, the effect runs only once after the initial render.
4. If the dependency array contains variables, the effect runs after every render where the variables have changed.

Lifecycle Explanation:
1. Initial Render: After the component mounts, the effect runs and sets up the interval.
2. Subsequent Renders: The effect does not run again because the dependency array is empty.
3. Cleanup: Before the component unmounts or before the effect runs again, the cleanup function is called to clear the interval.

The `useEffect` hook ensures that side effects are managed properly and provides a way to clean up resources when the component unmounts or before the effect runs again.
*/
