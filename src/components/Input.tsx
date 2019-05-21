import React, { ReactElement } from 'react';


interface InputProps {
    placeholder: string, 
    type: string, 
    value: string, 
    onChange: any, 
    onKeyPress: any,
    label: string,
    regExp: RegExp,
    validation: Function,
    errorMessage: string,
}


const Input = (props: InputProps): ReactElement => {
    const { placeholder, type, value,
        onChange, onKeyPress, label, regExp, validation, errorMessage } = props;

    const labelComponent = label ? <label className="label">{label}</label> : null;

    const inputComponent = (
        <input 
            className="input"
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );

    let error = false;
    if (validation && regExp && value !== "") {
        error = !regExp.test(value) && !validation(value);
    } else if (regExp && value !== "") {
        error = !regExp.test(value);
    } else if (validation && value !== "") {
        error = !validation(value);
    }
    return (
        <div className="input-margin">
            {labelComponent}
            {inputComponent}
            {error && <p className="help" style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};

Input.defaultProps = {
    placeholder: "", 
    type: "text", 
    value: "", 
    onChange: () => {}, 
    onKeyPress: () => {},
    label: "",
    regExp: undefined,
    validation: undefined,
    errorMessage: "Format error",
};

export default Input;
