import React from 'react';
import { iButtonProps } from '../../types/models';
import styles from './Button.module.scss';

const Button: React.FC<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > &
        iButtonProps
> = ({ children, handleClick, disabled }) => {
    return (
        <button className={styles.btn} onClick={handleClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
