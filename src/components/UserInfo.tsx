import React, { ReactElement } from 'react';
import uuid from "uuid/v4";
import "../styles/UserInfo.css";

interface UserInfoProps {
    key?: string;
    picture: string,
    username: string,
    name: string,
}


const UserInfo = (props: UserInfoProps): ReactElement => {
    const { key, username, name, picture } = props;

    return (
        <div className="user-info" id={`userinfo-${username}-${key}`} key={key}>
            <div className="user-picture">
                <img src={picture} alt="user-picture"/>
            </div>
            <div>
                <p>@{username}</p>
                <p>{name}</p>
            </div>
        </div>
    );
};

UserInfo.defaultProps = {
    key: uuid(),
    picture: "",
    username: "",
    name: "",
};

export default UserInfo;