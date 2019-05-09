import React from 'react'
import {User} from '../models/User';
import uuid from "uuid/v4";

interface TweetUserInfoProps extends User {
    key: string,
}

const TweetUserInfo = (props: TweetUserInfoProps) => {
    const {id, key, name, username, picture} = props;

    return (
        <div key={key} id={id} className="media-left">
            <div className="image is-64x64">
                <img alt="user-picture" src={picture}/>
            </div>
            <div>
                <p>{username}</p>
                <p>{name}</p>
            </div>
        </div>
    )
};

TweetUserInfo.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
};

export default TweetUserInfo
