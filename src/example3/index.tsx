import React from 'react';
import useIsWeekEnd from './useisweekend';

function Hook2() {

  const isWE = useIsWeekEnd()

  return <>
    Is weekend? {isWE ? "Yes" : "No"}
  </>

}

export default Hook2;
