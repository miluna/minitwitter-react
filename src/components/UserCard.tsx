import React, { ReactElement } from 'react';
import { User } from '../models/User';
import UserInfo from "./UserInfo";


interface UserCardProps {
    key?: string,
    user: User,
}


const UserCard = (props: UserCardProps): ReactElement => {
    const { key, user } = props;

    return (
        <div className="feed-element user-card" id={`usercard-${user.id}`} key={key} >
            <UserInfo id={user.id} pictureSize={4} />
            <div>
                {user.description}
            </div>
            <div>
                <p>{user.webpage}</p>
                <p>{user.location}</p>
            </div>
        </div>
    );
};

export default UserCard;
