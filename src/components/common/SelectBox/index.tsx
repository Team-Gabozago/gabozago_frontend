import React, { ChangeEvent, useState } from 'react';

type Option = [
    {
        value: string;
        name: string;
    }
];

type Props = {
    options: Option;
    label: string;
    defaultValue?: string;
};

const SelectBox = ({ options, label, defaultValue }: Props) => {
    const [option, setOption] = useState('');
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setOption(value);
    };
    return (
        <div>
            <label htmlFor="selectBox">{label}</label>
            <select onChange={handleChange} id="selectBox">
                {options.map(data => (
                    <option
                        key={data.value}
                        value={data.value}
                        defaultValue={defaultValue}
                    >
                        {data.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectBox;
