import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, multiply, divide } from "./actions";



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(2))}>-</button>
        <button onClick={() => dispatch(multiply(2))}>*</button>
        <button onClick={() => dispatch(divide(3))}>/</button>
        { isLogged ? <h3>Valuable information that you shouldn't see.</h3> : ''}
    </div>
  );
}

export default App;
