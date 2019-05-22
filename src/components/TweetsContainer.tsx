import React from 'react'
import { Post } from '../models/Post';
import withServicesContext from "../context/withServicesContext";
import TweetInput from "./TweetInput";
import Tweet from "./Tweet";
import * as mockedData from "../mocked_data";

interface TweetsContainerProps {
  tweets: Post[],
  showInput: boolean,
}

const TweetsContainer = (props: TweetsContainerProps) => {
  const { tweets, showInput } = props;
  
  const tweetList = tweets.map((e: Post) => (
      <Tweet {...e} />
  ));

  return (
      <div className="feed-element tweet-list">
          {showInput && <TweetInput />}
          {tweetList}
      </div>
  );

};

TweetsContainer.defaultProps = {
    // tweets: [],
    tweets: mockedData.allPosts,
    showInput: false,
};

export default withServicesContext(TweetsContainer);
