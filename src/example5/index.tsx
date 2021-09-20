import React from 'react';
import useIsLucky from './useislucky';

function Hook3() {

  const [result] = useIsLucky("Tomas");

  if (result !== undefined)
    return <>Was lucky? {result ? "Yes" : "No"}</>
  else
    return <>Loading..</>

}

export default Hook3;
