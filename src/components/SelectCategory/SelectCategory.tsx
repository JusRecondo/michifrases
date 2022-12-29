import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../../lib/utils';
import { ICategories } from '../../types/models';
import Select from '../Select/Select';

interface Props {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCategory: React.FC<Props> = ({ onChange }) => {
    const [categories, setCatgories] = useState<ICategories[]>([]);

    useEffect(() => {
        fetchCategories()
            .then(data => {
                setCatgories([{ id: '', name: 'random' }, ...data]);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <Select options={categories} onChange={onChange} />
        </div>
    );
};

export default SelectCategory;
