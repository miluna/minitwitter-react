import * as React from 'react';

interface ButtonProps {
    text: string,
    onClick?: any,
    color?: string,
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { text, onClick, color } = props;

    const cssClassName = color ? `button is-${color}` : "button" ;
    return (
        <button className={cssClassName} onClick={onClick}>{text}</button>
    );
};

export default Button;