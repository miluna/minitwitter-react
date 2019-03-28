import React from 'react';
import Icon from './Icon';
import { Post } from '../models/Post';


interface TweetProps extends Post {
    key?: string,
    onLike?: Function,
}


const Tweet = (props: TweetProps) => {

    const { id, comments, key, content, error, likes, picture, timestamp, onLike, userId } = props;

    const icon = <Icon id={id} iconName="heart" checked={true} key={key} onClick={onLike}/>

    return (
        <div className="media">
            <div className="media-left">
                <p className="image is-64x64">
                    <img src={picture} />
                </p>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{name}</strong> <small>@{userId}</small> <small>{timestamp}</small>
                        <br />
                        {content}
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                        {icon}
                    </div>
                </nav>
            </div>
            <div className="media-right">
                <button className="delete"></button>
            </div>
        </div>
    );
}

export default Tweet;
