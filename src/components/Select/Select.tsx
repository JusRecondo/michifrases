import React from 'react';
import style from './Select.module.scss';

interface Props {
    label: string;
    options: { id: string | number; name: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string | number;
}

const Select: React.FC<Props> = ({ label, options, onChange, value }) => {
    return (
        <label className='label'>{label}
            <select onChange={onChange} value={value} className={style.select}>
                {options
                    ? options.map(option => (
                          <option
                              key={option.id}
                              value={option.id}
                              className={style.option}
                          >
                              {option.name}
                          </option>
                      ))
                    : ''}
            </select>
        </label>
    );
};

export default Select;
