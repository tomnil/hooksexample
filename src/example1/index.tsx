import React from 'react';

const Comp1 = (): JSX.Element => {

    return <h1>The time is {new Date().toISOString()}</h1>;

};

export default Comp1;