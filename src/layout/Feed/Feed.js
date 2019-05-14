import React, { Component } from 'react';
import AppToolbar from "../../components/AppToolbar";
import UserCard from "../../components/UserCard";
import TweetsContainer from "../../components/TweetsContainer";

class Feed extends Component {
  render() {
    return (
      <div>
        <AppToolbar />
        <div className="feed-container">
          <UserCard />
          <TweetsContainer />
        </div>
      </div>
    );
  }
}

Feed.propTypes = {};

export default Feed;