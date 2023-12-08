import { useEffect, useState } from 'react';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const useAlert = (error) => {
    const [alertState, setAlertState] = useState('hidden');

    useEffect(() => {
        if (error) {
            setAlertState('block');
            const timeoutId = setTimeout(() => {
                setAlertState('hidden');
            }, 10000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [error]);

    const AlertComponent = () => {
        if (!error) {
            return null;
        }

        return (
            <Alert className={`${alertState} animate-pulse`} color="failure" icon={HiInformationCircle}>
                <span className="font-medium">{error}!</span>
            </Alert>
        );
    };

    return AlertComponent;
};

export default useAlert;
