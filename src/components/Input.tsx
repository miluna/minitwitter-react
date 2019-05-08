import React, { ReactElement } from 'react';


interface InputProps {
    className: string, 
    placeholder: string, 
    type: string, 
    value: string, 
    onChange: any, 
    onKeyPress: any,
    label: string,
    validation: Function,
    errorMessage: string,
}


const Input = (props: InputProps): ReactElement => {
    const { className, placeholder, type, value, 
        onChange, onKeyPress, label, validation, errorMessage } = props;

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

    const error = validation(value) 
        ? <React.Fragment/> 
        : <p style={{color: 'red'}}>{errorMessage}</p>;

    return (
        <div className="input-margin">
            {labelComponent}
            {inputComponent}
            {error}
        </div>
    );
}

Input.defaultProps = {
    className: "", 
    placeholder: "", 
    type: "text", 
    value: "", 
    onChange: () => {}, 
    onKeyPress: () => {},
    label: "",
    validation: () => {},
    errorMessage: "",
};

export default Input;
