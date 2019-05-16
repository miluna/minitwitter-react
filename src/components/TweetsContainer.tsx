import React from 'react'
import PropTypes from 'prop-types'
import { Post } from '../models/Post';
import withServicesContext from "../context/withServicesContext";
import TweetInput from "./TweetInput";
import Tweet from "./Tweet";

interface TweetsContainerProps {
  tweets: Post[],
}

const TweetsContainer = (props: TweetsContainerProps) => {
  const { tweets } = props;
  
  const tweetList = tweets.map((e: Post) => (
      <Tweet {...e} />
  ));

  return (
      <div className="feed-element tweet-list">
          <TweetInput />
          {tweetList}
      </div>
  );

};

TweetsContainer.defaultProps = {
    tweets: [],
};

export default withServicesContext(TweetsContainer);
