import React, { FunctionComponent, ReactElement } from 'react';

interface IconProps {
    id?: string,
    checked?: boolean,
    iconName: string,
    key?: string,
    onClick?: any
}

const Icon : FunctionComponent<IconProps> = ({ id, checked, iconName, key, onClick } : IconProps) : ReactElement<IconProps> => {
    let iconClass = "fa fa-";
    if (iconName) iconClass+= iconName;

    const style = {
        margin: "2%",
        color: checked ? "red" : "blue"
    }

    return (
        <span className="icon" style={style} onClick={() => onClick(id)} key={key}>
            <i className={iconClass}/>
        </span>
    );
};

export default Icon;