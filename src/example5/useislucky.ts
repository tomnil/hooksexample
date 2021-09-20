import React from 'react';

const useIsLucky = (userID: string): [boolean | undefined] => {

    const [isLucky, setIsLucky] = React.useState<boolean | undefined>(undefined);

    React.useEffect(() => {

        setTimeout(() => {
            setIsLucky(Math.random() > 0.5)
        }, 1000);

    }, [userID]);

    return [isLucky];

};

export default useIsLucky;

