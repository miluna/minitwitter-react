import React, { Component } from 'react';
import UserCard from "../../components/UserCard";
import TweetsContainer from "../../components/TweetsContainer";

class Feed extends Component {
  render() {
    return (
      <div>
        <div className="feed-container">
          <UserCard />
          <TweetsContainer showInput />
        </div>
      </div>
    );
  }
}

Feed.propTypes = {};

export default Feed;