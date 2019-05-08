import React, { Component } from 'react'
import { CommentService } from '../../services/CommentService';
import { PostService } from '../../services/PostService';
import { UserService } from '../../services/UserService';
import { withRouter } from 'react-router';
import UserCard from '../../components/UserCard';
import Tweet from '../../components/Tweet';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.commentService = new CommentService();
    this.postService = new PostService();
    this.userService = new UserService();
    this.state = {
      user: {},
      tweets: []
    }
  }

  sendTweet = (post) => {
    const { user, tweets } = this.state;
    const { content, picture } = post;

    const newPost = {
      userId: user.id,
      content,
      picture,
    };
    this.postService.postOne(newPost)
      .then(insertedPost => {
        tweets.push(insertedPost);
        this.setState({tweets});
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  componentDidMount() {
    const userPromise = this.userService.getOne("1");
    const tweetsPromise = this.postService.getAll();
    
    
    Promise.all([userPromise, tweetsPromise])
      .then( (params)=> {
        const [user, tweets] = params;
        this.setState({user, tweets})
      })
      .catch(err => console.log(err.message))
  }


  render() {
    console.log(this.state);
    const { user, tweets } = this.state;

    const mappedTweets = tweets.map(e => (
      <Tweet 
        key={e.id+Math.random} 
        {...e} 
        onLike={() => console.log("funcion de like")}
      />));

    return (
      <div>
        <UserCard {...user} />
        {mappedTweets}
      </div>
    )
  }
}

export default withRouter(Feed);
