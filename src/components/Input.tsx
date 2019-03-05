import React, { ReactElement } from 'react';


interface InputProps {
    className?: string, 
    placeholder?: string, 
    type?: string, 
    value?: string, 
    onChange?: any, 
    onKeyPress?: any,
    label?: string
}


const Input = (props: InputProps): ReactElement => {
    const { className, placeholder, type, value, onChange, onKeyPress, label } = props;

    const labelComponent = label ? <label>{label}</label> : null;

    const inputComponent = (
        <input 
            className={className ? ("input " + className) : "input"}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );

    return (
        <div>
            {labelComponent}
            {inputComponent}
        </div>
    );
}

export default Input;
