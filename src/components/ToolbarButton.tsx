import * as React from 'react';
import uuid from "uuid/v4";

interface ToolbarButtonProps {
    key: string,
    text: string,
    onClick?: any,
    active: boolean,
}

const ToolbarButton = (props: ToolbarButtonProps) => {
    const { key, text, onClick, active } = props;

    const classes = active ? "toolbar-btn toolbar-btn-active" : "toolbar-btn";

    return (
        <div key={key} className="btn-margin">
            <div className={classes} onClick={onClick}>{text}</div>
        </div>
    );
};

ToolbarButton.defaultProps = {
    key: uuid(),
    text: "",
    onClick: () => {},
    active: false,
}

export default ToolbarButton;