import React, { ReactElement } from 'react';


interface TextAreaProps {
    placeholder: string,
    value: string,
    loading: boolean,
    onChange: any,
    onKeyPress: any,
    label: string,
    regExp: RegExp,
    validation: Function,
    errorMessage: string,
}


const TextArea = (props: TextAreaProps): ReactElement => {
    const { placeholder, value, loading,
        onChange, onKeyPress, label, regExp, validation, errorMessage } = props;

    const labelComponent = label ? <label>{label}</label> : null;

    const inputComponent = (
        <div className={loading ? "control is-large is-loading" : "control is-large"}>
            <textarea
                className="textarea has-fixed-size"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
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
