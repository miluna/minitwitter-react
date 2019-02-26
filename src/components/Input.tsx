import React, { ReactElement } from 'react';


interface InputProps extends ReactElement {
    id: string;
    name: string;
    onClick?: any;
    onChange?: any;
}


const Input = (props: InputProps): ReactElement => {
    return (
        <div>
            <input  />
        </div>
    );
}

export default Input;