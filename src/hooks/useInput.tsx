import React, { useCallback, useState } from 'react';

export const useInput = (
    initialValue?: string,
    callFunc?: (value: string) => void
) => {
    const [value, setValue] = useState(initialValue || '');
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (callFunc) {
                callFunc(e.target.value);
            }
        },
        [callFunc]
    );

    return { value, setValue, onChange };
};
