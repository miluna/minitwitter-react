import React from 'react';
import Icon from './Icon';
import { Post } from '../models/Post';
import uuid from "uuid/v4";
import UserInfo from "./UserInfo";


interface TweetProps extends Post {
    key: string,
    onLike: Function,
    onDislike: Function,
    onDelete: Function,
    onUpdate: Function,
    onRetweet: Function,
}


const Tweet = (props: TweetProps) => {
    const { id, key, comments, content, error, likes, picture, timestamp, onLike, onRetweet, userId } = props;

    const heart = (
        <Icon
            id={id}
            iconName="heart"
            checked={true}
            key={key}
            onClick={() => onLike(id)}
        />
    );
    const retweet = (
        <Icon
            iconName="retweet"
            onClick={() => onRetweet(id)}
        />
    );

    return (
        <div id={id} key={key} className="hero">
            <div className="hero-body">
                <UserInfo userId={userId} pictureSize={3}/>
                <div>
                    {content}
                </div>
                <div>
                    {heart}
                    {retweet}
                </div>
            </div>
        </div>
    );
};

Tweet.defaultProps = {
    key: uuid(),
    onLike: () => {},
    onDislike: () => {},
    onDelete: () => {},
    onUpdate: () => {},
    onRetweet: () => {},
    id: uuid(),
    userId: undefined,
    content: "",
    timestamp: undefined,
    picture: "",
    likes: [],
    comments: [],
    error: ""
};

export default Tweet;
