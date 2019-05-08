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
        <div className="btn-margin">
            <button className={cssClassName} onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;