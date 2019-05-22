import React, { Component } from 'react';
import { withRouter } from "react-router";
import { UserService } from '../../services/UserService';
import UserCard from "../../components/UserCard";
import TweetsContainer from "../../components/TweetsContainer";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      isUserProfile: !this.props.match.params.id,
      user: {},
      tweets: [],
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    // const user = this.userService.getOne(id);
    // this.setState({
    //   id: user.id,
    //   name: user.name,
    //   description: user.description,
    //   location: user.location,
    //   webpage: user.webpage,
    //   picture: user.picture,
    // })
  }

  render() {
    const { user, tweets, isUserProfile } = this.state;

    return (
      <div>
        <div className="feed-container">
          {isUserProfile
            ? (
              <React.Fragment>
                <UserCard/>
                <TweetsContainer showInput/>
              </React.Fragment>
            )

            : (
              <React.Fragment>
                <UserCard/>
                <TweetsContainer/>
              </React.Fragment>
            )
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);
