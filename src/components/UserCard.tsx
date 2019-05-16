import React, { ReactElement } from 'react';
import { User } from '../models/User';
import uuid from "uuid/v4";
import UserInfo from "./UserInfo";
import avatar from "../media/avatar.jpg";


interface UserCardProps extends User {
    key?: string;
}


const UserCard = (props: UserCardProps): ReactElement => {
    const { id, key, username, name, picture, location, webpage, description } = props;

    return (
        <div className="feed-element user-card" id={`usercard-${id}`} key={key} >
            <UserInfo
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
    id: uuid(),
    username: "Pepe",
    name: "Pepe Rodriguez",
    picture: avatar,
    location: "Madrid",
    webpage: "https://www.google.com",
    description: "Soy un tipo duro"
};

export default UserCard;