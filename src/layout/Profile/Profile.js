import React, { Component } from 'react';
import { withRouter } from "react-router";
import UserCard from "../../components/UserCard";
import TweetsContainer from "../../components/TweetsContainer";
import withServicesContext from "../../context/withServicesContext";
import withUserInfo from "../../context/withUserInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      tweets: [],
    }
  }

  componentDidMount(){
    const { userService, postService } = this.props;
    const { id } = this.props.match.params;
    let userPromise = new Promise((resolve) => resolve(this.props.user));
    let userPosts = new Promise(() => {});
    if (id) {
      if (!this.isUserProfile()) userPromise = userService.getOne(id);
      userPosts = postService.getAllFromUser(id);
    } else {
      userPosts = postService.getAllFromCurrentUser(id);
    }

    Promise.all([userPromise, userPosts])
      .then(([user, tweets]) => {
        this.setState({ user, tweets });
      })
      .catch(err => console.log(err));
  }

  isUserProfile = () => {
    return (this.props.user.id &&
      this.props.user.id === this.props.match.params.id) || !this.props.match.params.id;
  };

  render() {
    const { user, tweets } = this.state;

    return (
      <div>
        <div className="feed-container">
          <UserCard {...user} />
          {this.isUserProfile()
            ? <TweetsContainer showInput tweets={tweets} />
            : <TweetsContainer tweets={tweets} />
          }
        </div>
      </div>
    )
  }
}

export default withRouter(withUserInfo(withServicesContext(Profile)));
