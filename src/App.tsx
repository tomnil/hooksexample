import React from 'react';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import Example4 from './example4';
import Example5 from './example5';
import { Sum } from './misc';

const App = (): JSX.Element => {


  console.log(Sum(1, 2));

  return <>
    <h1>Example1</h1>
    <Example1 />
    <hr />
    <h1>Example2</h1>
    <Example2 />
    <hr />
    <h1>Example3</h1>
    <Example3 />
    <hr />
    <h1>Example4</h1>
    <Example4 />
    <hr />
    <h1>Example5</h1>
    <Example5 />
  </>

};

export default App;
