import React, { Component } from 'react';
import UserCard from "../../components/UserCard";
import TweetsContainer from "../../components/TweetsContainer";
import withUserInfo from "../../context/withUserInfo";
import withServicesContext from "../../context/withServicesContext";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    }
  }

  componentDidMount(){
    const { postService } = this.props;
    postService.getAll()
      .then(tweets => {
        this.setState({ tweets });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { tweets } = this.state;
    const { user } = this.props;
    return (
      <div>
        <div className="feed-container">
          <UserCard user={user} />
          <TweetsContainer showInput tweets={tweets}/>
        </div>
      </div>
    );
  }
}

export default withUserInfo(withServicesContext(Feed));
