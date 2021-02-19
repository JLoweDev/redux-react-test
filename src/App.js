import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterReducer from './reducers/counter';
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
      <>
      {isLogged ? <h3>Confidential</h3> : <h3>Please Log In</h3>}
      </>
    </div>
  );
}

export default App;
