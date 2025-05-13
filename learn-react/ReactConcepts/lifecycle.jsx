import React, { useState, useEffect } from "react";

// Child Component
function Child() {
  console.log("Child Component rendered");

  useEffect(() => {
    console.log("Child Component Mounted");

    return () => {
      console.log("Child Component Unmounted");
    };
  }, []);

  console.log("Child rendering complete");
  return <h1>Child Component</h1>;
}

/*
Explanation of Lifecycle Stages:
1. Mounting: When a component is being inserted into the DOM.
   - Constructor (if using class components)
   - getDerivedStateFromProps (if using class components)
   - render
   - componentDidMount (if using class components) / useEffect with empty dependency array

2. Updating: When a component is being re-rendered due to changes in props or state.
   - getDerivedStateFromProps (if using class components)
   - shouldComponentUpdate (if using class components)
   - render
   - getSnapshotBeforeUpdate (if using class components)
   - componentDidUpdate (if using class components) / useEffect with dependencies

3. Unmounting: When a component is being removed from the DOM.
   - componentWillUnmount (if using class components) / Cleanup function in useEffect
*/

// App Component
function App() {
  console.log("App Component rendered");
  const [counter, setCounter] = useState(() => {
    console.log("lazy init counter");
    return 0;
  });
  const [show, setShow] = useState(false);

  // Log when counter changes
  useEffect(() => {
    console.log(`Counter updated: ${counter}`);

    if (counter === 5) {
      console.log("Counter reached 5, showing Child Component");
      setShow(true);
    }

    return () => {
      console.log("Counter updated, hiding Child Component");
      setShow(false);
    };
  }, [counter]);

  // Log when show changes
  useEffect(() => {
    console.log(`Show updated: ${show}`);
  }, [show]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>

      {/* Conditional rendering of Child component */}
      {show && <Child />}
    </div>
  );
}

export default App;

/*
Explanation of Lifecycle in App Component:
1. Initial Render:
   - The App component is rendered for the first time.
   - The `useState` hook initializes `counter` to 0 and `show` to false.
   - The `useEffect` hooks are set up but not executed yet.

2. Counter Update:
   - When the "Increase Counter" button is clicked, `setCounter` updates the `counter` state.
   - The App component re-renders.
   - The `useEffect` hook for `counter` logs the updated counter value.
   - If `counter` reaches 5, `setShow(true)` is called, causing the Child component to be rendered.

3. Show Update:
   - When `setShow` is called, the `show` state is updated.
   - The App component re-renders.
   - The `useEffect` hook for `show` logs the updated show value.

4. Child Component Lifecycle:
   - When `show` is true, the Child component is mounted.
   - The `useEffect` hook in Child logs "Child Component Mounted".
   - When `show` is false, the Child component is unmounted.
   - The cleanup function in Child's `useEffect` logs "Child Component Unmounted".
*/
