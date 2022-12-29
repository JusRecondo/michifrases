import React from 'react';
import { InputProps } from '../../types/models';


const Input: React.FC<InputProps> = ({label, onInput, value}) => {
    return (
        <label>{label}
            <input type="text" onInput={onInput} value={value}/>
        </label>
    );
};

export default Input;
