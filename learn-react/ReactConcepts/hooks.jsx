import React, { useRef, useMemo, useCallback, createContext, useContext, useState } from "react";

// 1. useRef
// Purpose:
// Used to persist values between renders without causing a re-render.
// Commonly used to access DOM elements or store mutable values.

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access DOM input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

/*
Explanation of useRef Hook:
1. The `useRef` hook returns a mutable ref object whose `.current` property is initialized to the passed argument (initial value).
2. The ref object persists for the full lifetime of the component.
3. Commonly used to access a child DOM element imperatively.
4. Unlike state, changing a ref does not cause a re-render.
*/

function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1; // Updates value without re-rendering
    console.log(countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
}

// 2. useMemo
// Purpose:
// Memoizes a computed value to avoid re-calculating it on every render when dependencies haven’t changed.
// Use Case: Performance optimization for expensive computations.

function ExpensiveComputation() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Expensive function only re-calculated when `count` changes
  const computedValue = useMemo(() => {
    console.log("Computing...");
    return count * 10;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Computed: {computedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>Change Other State</button>
    </div>
  );
}

/*
Explanation of useMemo Hook:
1. The `useMemo` hook returns a memoized value.
2. It only recomputes the memoized value when one of the dependencies has changed.
3. This optimization helps to avoid expensive calculations on every render.
4. Useful for optimizing performance by memoizing expensive computations.
*/

// 3. useCallback
// Purpose:
// Memoizes a function to prevent it from being recreated unnecessarily on every render.
// Use Case: Useful when passing functions as props to child components.

function Button({ handleClick }) {
  console.log("Button re-rendered");
  return <button onClick={handleClick}>Click me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  // Memoized function
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button handleClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

/*
Explanation of useCallback Hook:
1. The `useCallback` hook returns a memoized callback function.
2. It only changes if one of the dependencies has changed.
3. Useful for passing stable functions as props to child components to prevent unnecessary re-renders.
*/

// 4. useContext
// Purpose:
// Shares data (like global state) across components without prop drilling.
// Use Case: Managing global state or settings (e.g., theme, authentication).

// Create a Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access context values

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
}

/*
Explanation of useContext Hook:
1. The `useContext` hook accepts a context object (the value returned from `createContext`) and returns the current context value.
2. The current context value is determined by the `value` prop of the nearest `Context.Provider` above the calling component in the tree.
3. Useful for sharing global data across components without passing props down manually at every level.
*/

// Summary Table
// Hook        | Purpose                                      | Common Use Case
// ------------|----------------------------------------------|---------------------------------------------
// useRef      | Store a mutable value or DOM ref             | Access DOM elements, retain values between renders.
// useMemo     | Memoize a computed value                     | Optimize expensive computations.
// useCallback | Memoize a function                           | Avoid unnecessary re-creation of functions in child props.
// useContext  | Share global data across components          | Avoid prop drilling for common/shared state.

// These hooks help you manage performance and state more efficiently in React.