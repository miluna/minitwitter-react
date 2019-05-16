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
}

const Button = (props: ButtonProps) => {
    const { key, id, text, onClick, primary, danger, secondary } = props;

    const cssClassName = danger
        ? `button is-danger`
        : primary
            ? "button is-primary"
            : secondary
                ? "button is-secondary"
                : "button";
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
};

export default Button;