import React from 'react';

interface Props {
    options: {id: string | number, name: string}[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({options, onChange}) => {

    return (
        <div>
            <select onChange={onChange}>
                {options ?
                    options.map(option => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))
                : ''}
            </select>
        </div>
    );
};

export default Select;
