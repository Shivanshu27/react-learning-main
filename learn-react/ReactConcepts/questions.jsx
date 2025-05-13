import React, { useState, useRef } from 'react';

// Pure Component
// A pure component is a component that renders the same output for the same props and state.
// It does not have side effects and does not depend on anything other than its props and state.

function PureComponent({ value }) {
  return <div>Pure Component Value: {value}</div>;
}

// Impure Component
// An impure component is a component that may render different outputs for the same props and state.
// It may have side effects or depend on external factors.

let impureCounter = 0;

function ImpureComponent({ value }) {
  impureCounter++;
  return <div>Impure Component Value: {value}, Counter: {impureCounter}</div>;
}

// Controlled Component
// A controlled component is a component where the form data is handled by the React component state.

function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Controlled:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <p>Value: {value}</p>
    </div>
  );
}

// Uncontrolled Component
// An uncontrolled component is a component where the form data is handled by the DOM itself.

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Input Value: ' + inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Uncontrolled:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <PureComponent value={10} />
      <ImpureComponent value={10} />
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  );
}

export default App;

/*
Explanation of Pure and Impure Components:

Pure Component:
1. A pure component always renders the same output given the same props and state.
2. It does not have side effects and does not rely on external factors.
3. Pure components are predictable and easier to test.
4. In React, you can create a pure component by extending `React.PureComponent` or by using functional components with memoization.

Impure Component:
1. An impure component may render different outputs even if the props and state are the same.
2. It may have side effects or rely on external factors, such as global variables or external services.
3. Impure components are less predictable and harder to test.
4. Impure components can be useful in certain scenarios, but they should be used with caution.

In the example above:
- `PureComponent` is a pure component because it always renders the same output for the same `value` prop.
- `ImpureComponent` is an impure component because it relies on the external `impureCounter` variable, which causes it to render different outputs for the same `value` prop.

Explanation of Controlled and Uncontrolled Components:

Controlled Component:
1. In a controlled component, form data is handled by the component's state.
2. The value of the input element is controlled by the React state.
3. Changes to the input value are handled by an onChange event handler that updates the state.
4. Controlled components provide more control over the form data and make it easier to validate and manipulate the data.

Uncontrolled Component:
1. In an uncontrolled component, form data is handled by the DOM itself.
2. The value of the input element is accessed using a ref.
3. Changes to the input value are not directly handled by the component's state.
4. Uncontrolled components are simpler to implement but provide less control over the form data.

In the example above:
- `ControlledComponent` is a controlled component because the input value is managed by the component's state.
- `UncontrolledComponent` is an uncontrolled component because the input value is accessed using a ref and is not managed by the component's state.
*/













// # Preventing Re-rendering of a Component in React

// Re-rendering of components in React can lead to performance issues if not managed properly. Here are several techniques to prevent unnecessary re-renders:

// ## 1. Using `React.memo`

// `React.memo` is a higher-order component that prevents a functional component from re-rendering if its props have not changed.

// ```jsx
// import React from 'react';

// const MyComponent = React.memo((props) => {
//   // Component logic here
//   return <div>{props.value}</div>;
// });
// ```

// ## 2. Using `shouldComponentUpdate` in Class Components

// In class components, you can use the `shouldComponentUpdate` lifecycle method to prevent re-renders based on custom logic.

// ```jsx
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     // Return false if the component should not update
//     return nextProps.value !== this.props.value;
//   }

//   render() {
//     return <div>{this.props.value}</div>;
//   }
// }
// ```

// ## 3. Using `PureComponent`

// `PureComponent` is a base class that automatically implements `shouldComponentUpdate` with a shallow prop and state comparison.

// ```jsx
// import React, { PureComponent } from 'react';

// class MyComponent extends PureComponent {
//   render() {
//     return <div>{this.props.value}</div>;
//   }
// }
// ```

// ## 4. Using `useMemo` and `useCallback` Hooks

// In functional components, you can use the `useMemo` hook to memoize expensive calculations and the `useCallback` hook to memoize functions.

// ```jsx
// import React, { useMemo, useCallback } from 'react';

// const MyComponent = ({ value, onClick }) => {
//   const memoizedValue = useMemo(() => {
//     // Expensive calculation here
//     return value * 2;
//   }, [value]);

//   const memoizedCallback = useCallback(() => {
//     // Function logic here
//     onClick();
//   }, [onClick]);

//   return (
//     <div>
//       {memoizedValue}
//       <button onClick={memoizedCallback}>Click Me</button>
//     </div>
//   );
// };
// ```

// ## 5. Avoid Inline Functions and Objects

// Passing inline functions and objects as props can cause re-renders. Instead, define them outside the render method or use `useCallback` and `useMemo`.

// ```jsx
// // Avoid this
// <MyComponent onClick={() => doSomething()} />

// // Use this
// const handleClick = useCallback(() => doSomething(), []);
// <MyComponent onClick={handleClick} />
// ```

// ## 6. Using Immutable Data Structures

// Ensure that your state and props are immutable, as React relies on shallow comparisons. Libraries like Immutable.js can help with this.

// ## Conclusion

// Preventing unnecessary re-renders in React involves using techniques like `React.memo`, `shouldComponentUpdate`, `PureComponent`, `useMemo`, and `useCallback`. By following these best practices, you can improve the performance of your React applications.