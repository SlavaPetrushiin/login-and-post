import React, {ChangeEvent} from 'react';
import { IInput } from '../../../psges/Login/Login';
import cls from  './Input.module.css'

interface IProps extends IInput {
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const Input  = (props: IProps) => {
    return (
        <div className={cls.authBlockInput}>
            <label htmlFor={props.label} className={cls.authLabel}>
                <span>{props.placeholder}</span>
                <input
                    type={props.type}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange(e)}
                />
            </label>
        </div>
    )
};

export default Input;