import React from 'react'
import uuid from "uuid/v4";
import AppLogo from "./AppLogo";
import Button from "./Button";
import "../styles/AppToolbar.css";
import SearchUser from "./SearchUser";

interface AppToolbarProps {
    key: string,
}

const AppToolbar = (props: AppToolbarProps) => {
    const { key } = props;

    return (
        <div key={key} id="app-toolbar" className="app-toolbar">
            <SearchUser />
            <AppLogo/>
            <div className="toolbar-btns">
                <Button text="Profile"/>
                <Button text="Logout"/>
            </div>
        </div>
    )
};

AppToolbar.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
};

export default AppToolbar;
