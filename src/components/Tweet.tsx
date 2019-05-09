import React from 'react';
import Icon from './Icon';
import { Post } from '../models/Post';
import uuid from "uuid/v4";


interface TweetProps extends Post {
    key: string,
    onLike: Function,
    onDislike: Function,
    onDelete: Function,
    onUpdate: Function,
}


const Tweet = (props: TweetProps) => {
    const { id, key, comments, content, error, likes, picture, timestamp, onLike, userId } = props;

    const heart = <Icon id={id} iconName="heart" checked={true} key={key} onClick={() => onLike(id)}/>;
    const retweet = <Icon iconName="" />;

    return (
        <div id={id} key={key} className="media">

        </div>
    );
};

Tweet.defaultProps = {
    key: uuid(),
    onLike: () => {},
    onDislike: () => {},
    onDelete: () => {},
    onUpdate: () => {},
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
