import React from 'react'
import uuid from "uuid/v4";
import AppLogo from "./AppLogo";
import "../styles/AppToolbar.css";
import SearchUser from "./SearchUser";
import { withRouter, RouteComponentProps } from 'react-router';
import ToolbarButton from './ToolbarButton';

interface AppToolbarProps extends RouteComponentProps {
    key: string,
}

const AppToolbar = (props: AppToolbarProps) => {
    const { key, history, location } = props;
    const isInProfilePath = new RegExp(".*profile.*").test(location.pathname);

    return (
        <div key={key} id="app-toolbar" className="app-toolbar">
            <SearchUser />
            <AppLogo className="app-logo-toolbar" onClick={() => history.push("/")} />
            <div className="toolbar-btns">
                <ToolbarButton text="Profile" onClick={() => console.log("logout")} active={isInProfilePath}/>
                <ToolbarButton text="Logout" onClick={() => console.log("logout")} />
            </div>
        </div>
    )
};

AppToolbar.defaultProps = {
    key: uuid(),
};

export default withRouter(AppToolbar);
