import React from 'react';
import Icon from './Icon';


interface TweetProps {
    id?: string,
    userPhoto?: string,
    key?: string,
    username: string,
    date?: string,
    name: string,
    tweet: string,
    liked?: boolean,
    onLike?: Function,
}


const Tweet = (props: TweetProps) => {

    const { id, userPhoto, key, username, name, tweet, date, liked, onLike } = props;

    const icon = <Icon id={id} iconName="heart" checked={liked} key={key} onClick={onLike}/>

    return (
        <div className="media">
            <div className="media-left">
                <p className="image is-64x64">
                    <img src={userPhoto} />
                </p>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{name}</strong> <small>@{username}</small> <small>{date}</small>
                        <br />
                        {tweet}
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
