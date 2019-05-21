import * as React from 'react';
import uuid from "uuid/v4";

interface ButtonProps {
    key: string,
    id: string,
    text: string,
    onClick?: any,
    primary?: boolean,
    danger?: boolean,
    secondary?: boolean,
    loading?: boolean,
    error?: boolean,
}

const Button = (props: ButtonProps) => {
    const { key, id, text, onClick, primary, danger, error, secondary, loading } = props;


    let cssClassName = danger || error
        ? `button is-danger`
        : primary
            ? "button is-primary"
            : secondary
                ? "button is-secondary"
                : "button";
    if (loading) cssClassName += " is-loading";

    return (
        <div id={id} key={key} className="btn-margin">
            <button className={cssClassName} onClick={onClick}>{text}</button>
        </div>
    );
};

Button.defaultProps = {
    key: uuid(),
    id: uuid(),
    text: "",
    onClick: () => {},
    primary: false,
    danger: false,
    secondary: false,
    loading: false,
    error: false,
};

export default Button;