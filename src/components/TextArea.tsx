import React, { ReactElement } from 'react';


interface TextAreaProps {
    placeholder: string,
    value: string,
    onChange: any,
    onKeyPress: any,
    label: string,
    regExp: RegExp,
    validation: Function,
    errorMessage: string,
}


const TextArea = (props: TextAreaProps): ReactElement => {
    const { placeholder, value,
        onChange, onKeyPress, label, regExp, validation, errorMessage } = props;

    const labelComponent = label ? <label>{label}</label> : null;

    const inputComponent = (
        <textarea
            className="textarea"
            placeholder={placeholder}
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
        {error && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};

TextArea.defaultProps = {
    placeholder: "",
    value: "",
    onChange: () => {},
    onKeyPress: () => {},
    label: "",
    regExp: undefined,
    validation: undefined,
    errorMessage: "Format error",
};

export default TextArea;
