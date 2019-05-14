import * as React from 'react';
import uuid from "uuid/v4";

interface ButtonProps {
    key: string,
    text: string,
    onClick?: any,
    color?: string,
}

const Button = (props: ButtonProps) => {
    const { key, text, onClick, color } = props;

    const cssClassName = color ? `button is-${color}` : "button" ;
    return (
        <div key={key} className="btn-margin">
            <button className={cssClassName} onClick={onClick}>{text}</button>
        </div>
    );
};

Button.defaultProps = {
    key: uuid(),
    text: "",
    onClick: () => {},
    color: undefined,
}

export default Button;