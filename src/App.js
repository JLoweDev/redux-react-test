import React from 'react';
import { useSelector } from 'react-redux';
import counterReducer from './reducers/counter';

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <>
      {isLogged === true ? <h3>Confidential</h3> : <h3>Please Log In</h3>}
      </>
    </div>
  );
}

export default App;
