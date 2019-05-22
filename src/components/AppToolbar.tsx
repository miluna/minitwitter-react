import React from 'react'
import uuid from "uuid/v4";
import AppLogo from "./AppLogo";
import "../styles/AppToolbar.css";
import SearchUser from "./SearchUser";
import { withRouter, RouteComponentProps } from 'react-router';
import ToolbarButton from './ToolbarButton';
import {NavLink} from "react-router-dom";

interface AppToolbarProps extends RouteComponentProps {
    key: string,
}

const AppToolbar = (props: AppToolbarProps) => {
    const { key, location } = props;
    const isInFeedPath = new RegExp("^/$").test(location.pathname);
    const isInProfilePath = new RegExp("^/profile$").test(location.pathname);
    return (
        <div key={key} id="app-toolbar" className="app-toolbar">
            <SearchUser />
            <NavLink to="/">
                <AppLogo className="app-logo-toolbar" />
            </NavLink>
            <div className="toolbar-btns">
                <NavLink to="/">
                    <ToolbarButton text="Feed" active={isInFeedPath}/>
                </NavLink>
                <NavLink to="/profile">
                    <ToolbarButton text="Profile" active={isInProfilePath}/>
                </NavLink>
                <ToolbarButton text="Logout" onClick={() => console.log("logout")} />
            </div>
        </div>
    )
};

AppToolbar.defaultProps = {
    key: uuid(),
};

export default withRouter(AppToolbar);
