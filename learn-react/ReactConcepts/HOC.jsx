import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Higher-Order Component (HOC)
// Purpose:
// A HOC is a function that takes a component and returns a new component with additional props or behavior.

function withUnderline(Component) {
  return (props) => {
    return (
      <Component
        {...props}
        style={{ textDecoration: "underline", color: "red" }}
      />
    );
  };
}

/*
Explanation of HOC:
1. A Higher-Order Component (HOC) is a pattern in React for reusing component logic.
2. It is a function that takes a component as an argument and returns a new component.
3. The new component can add additional props, styles, or behavior to the original component.
4. HOCs are commonly used for cross-cutting concerns like logging, theming, or authentication.
*/

const Text = (props) => {
  return <h1 {...props}>I am a Text</h1>;
};

const TextWithUnderline = withUnderline(Text);

const Para = (props) => {
  return <p {...props}>I am Para</p>;
};

const MyPara = withUnderline(Para);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload!
        </p>
        <Para />
        <MyPara />
        <span className="App-link">Hello from codedamn :)</span>
        <Text />
        <TextWithUnderline />
      </header>
    </div>
  );
}

export default App;

/*
Explanation of Example:
1. `withUnderline` is a HOC that adds underline and red color styles to a component.
2. `Text` is a simple functional component that renders an <h1> element.
3. `TextWithUnderline` is the result of applying the `withUnderline` HOC to the `Text` component.
4. `Para` is another functional component that renders a <p> element.
5. `MyPara` is the result of applying the `withUnderline` HOC to the `Para` component.
6. In the `App` component, both `TextWithUnderline` and `MyPara` are rendered with the additional styles provided by the HOC.
*/
