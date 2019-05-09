import React, { ReactElement } from 'react';
import uuid from "uuid/v4";

interface UserInfoProps {
    key?: string;
    picture: string,
    username: string,
    name: string,
}


const UserInfo = (props: UserInfoProps): ReactElement => {
    const { key, username, name, picture } = props;

    return (
        <div id={`userinfo-${username}-${key}`} key={key}>
            <div style={{ backgroundImage: `url('${picture}')`}}/>
            <div>
                <p>{username}</p>
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