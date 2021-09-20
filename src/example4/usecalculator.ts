import React from 'react';

const useCalculator = (): { result: number; Add: (i: number) => void; Set: (i: number) => void; } => {

    const [result, setResult] = React.useState(0);

    function Add(i: number) {
        setResult(result => result + i);
    }

    function Set(i: number) {
        setResult(i);
    }


    return { result, Add, Set }

};

export default useCalculator;

