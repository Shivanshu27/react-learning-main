// // // compound components 

// // import React from "react";
// // import logo from "./logo.svg";

// // import Select from "./Components/Select";
// // import Option from "./Components/Option";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Select value="C++">
// //         <Option value="JS" text="JavaScript" />
// //         <Option value="Cpp" text="C++" />
// //         <Option value="HTML" text="HTML" />
// //         <Option value="CSS" text="CSS" />
// //         <Option value="JAVA" text="JAVA" />
// //       </Select>

// //       <Select value="HP">
// //         <Option value="MAc" text="Macbook" />
// //         <Option value="HP" text="HP" />
// //         <Option value="Lenovo" text="Lenovo" />
// //       </Select>
// //     </div>
// //   );
// // }

// // export default App;

// // redux learning ------- 


import React from 'react'
import logo from './logo.svg'
import './App.css'

import {useDispatch} from 'react-redux'
import { decrement, increment} from './redux/slices/CounterSlice.js'

import Counter from './components/counter.jsx'

function App() {
    const dispatch = useDispatch()
	return (
		<div className="App">
			<button onClick={e => dispatch(increment())}>+</button>
            <Counter />
            <button onClick={e => dispatch(decrement())}>-</button>
		</div>
	)
}

export default App

// import React, { useState, useEffect } from 'react';

// function App() {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSeconds(prevSeconds => prevSeconds + 1);
//         }, 1000);

//         return () => clearInterval(interval); // Cleanup on unmount
//     }, []); // Empty dependency array means it runs once on mount

//     return (
//         <div>
//             <p>Seconds: {seconds}</p>
//         </div>
//     );
// }

// export default App;


// import React, { useState, useMemo } from 'react';

// // Expensive calculation function
// function expensiveCalculation(num) {
//     console.log('Calculating...');
//     return num * 2;
// }

// function MemoizedComponent({ number }) {
//     // Memoize the result of the expensive calculation
//     const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

//     return (
//         <div>
//             <p>Result: {memoizedValue}</p>
//         </div>
//     );
// }

// function App() {
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(1);

//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>
//             <button onClick={() => setNumber(number + 1)}>Increment Number</button>
//             <p>Count: {count}</p>
//             <MemoizedComponent number={number} />
//         </div>
//     );
// }

// export default App;



// import React, { useState, useCallback } from 'react';

// // Child component
// const Child = React.memo(({ onButtonClick }) => {
//     console.log('Child component rendered');
//     return (
//         <button onClick={onButtonClick}>Click Me</button>
//     );
// });

// function App() {
//     const [count, setCount] = useState(0);

//     // Memoize the callback function
//     const increment = useCallback(() => {
//         setCount((prevCount) => prevCount + 1);
//     }, []);

//     return (
//         <div>
//             <h1>useCallback Example</h1>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment Count</button>
//             <Child onButtonClick={increment} />
//         </div>
//     );
// }

// export default App;