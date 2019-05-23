import React, { ReactElement } from 'react';
import { User } from '../models/User';
import uuid from "uuid/v4";
import UserInfo from "./UserInfo";
import withUserInfo from "../context/withUserInfo";


interface UserCardProps extends User {
    key?: string;
}


const UserCard = (props: UserCardProps): ReactElement => {
    const { id, key, username, name, picture, location, webpage, description } = props;

    return (
        <div className="feed-element user-card" id={`usercard-${id}`} key={key} >
            <UserInfo
                id={id}
                picture={picture}
                username={username}
                name={name}
            />
            <div>
                {description}
            </div>
            <div>
                <p>{webpage}</p>
                <p>{location}</p>
            </div>
        </div>
    );
};

UserCard.defaultProps = {
    key: uuid(),
};

export default withUserInfo(UserCard);
