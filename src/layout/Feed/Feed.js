import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppToolbar from "../../components/AppToolbar";
import UserCard from "../../components/UserCard";
import TweetsContainer from "../../components/TweetsContainer";

class Feed extends Component {
  render() {
    return (
      <div>
        <AppToolbar />
        <UserCard />
        <TweetsContainer />
      </div>
    );
  }
}

Feed.propTypes = {};

export default Feed;