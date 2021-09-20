import React from 'react';

const useIsWeekend = (): boolean => {

    const [isWeekEnd, setIsWeekEnd] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsWeekEnd([6, 0].includes(new Date().getDay()))
    }, []);

    return isWeekEnd;

};

export default useIsWeekend;

