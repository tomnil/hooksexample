import React from 'react';
import useCounter from './usecounter';

function Hook1Example() {

  const [number, inc] = useCounter();

  return <>
    Number: {number}<br />
    <button onClick={inc}>Increment</button>
  </>

}

export default Hook1Example;
