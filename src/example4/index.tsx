import React from 'react';
import useCalculator from './usecalculator';

function Hook2() {

  const { result, Add, Set } = useCalculator()

  return <>
    Result: {result}<br />
    <button onClick={() => Add(1)}>Increment</button>
    <button onClick={() => Add(-1)}>Decrement</button>
    <button onClick={() => Set(0)}>Reset</button>
  </>

}

export default Hook2;
