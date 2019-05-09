import React from 'react'
import uuid from "uuid/v4";

interface TweetInputProps {
    key: string,
}

const TweetInput = (props: TweetInputProps) => {
    const { key } = props;

    return (
        <div key={key} id="tweet-input-box">

        </div>
    )
};

TweetInput.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
};

export default TweetInput;
