import React from 'react';

const useCounter = (): [number, () => void] => {

    const [number, setNumber] = React.useState(0);

    function increment() {
        setNumber(randomNumber => randomNumber + 1);
    }

    return [number, increment];

};

export default useCounter;

