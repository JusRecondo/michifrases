import React from 'react';
import { ITextInputProps} from '../../types/models';

const TextInput: React.FC<ITextInputProps> = ({label, onInput, value, maxLength}) => {
    return (
        <div className="field-row-stacked">
            <label className='label'>{label}
                <input type="text" onInput={onInput} value={value} maxLength={maxLength}/>
            </label>
        </div>
    );
};

export default TextInput;
