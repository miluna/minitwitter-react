import React, { Component } from 'react';
import './styles/main.css';
import { Switch, Route, withRouter } from "react-router";
import Login from './layout/Login';
import Profile from './layout/Profile';
import Feed from './components/FeedComponent';
import ProtectedRoute from './context/ProtectedRoute';
import { LoggedInContextProvider } from './context/LoggedInContext';
import { UserService } from './services/UserService';
import { ServicesContextProvider } from './context/ServicesContext';
import { CommentService } from './services/CommentService';
import { PostService } from './services/PostService';

const services = {
    userService: new UserService(),
    postService: new PostService(),
    commentService: new CommentService(),
};


class App extends Component {
    render() {
        return (
            <Switch>
                <ServicesContextProvider 
                    userService={services.userService} 
                    postService={services.postService}
                    commentService={services.commentService}
                >
                <LoggedInContextProvider 
                    history={this.props.history} 
                    userService={services.userService}
                >
                    <Route exact path="/login" component={Login} />
                    <ProtectedRoute exact path="/" component={Feed} />
                    <Route exact path="/profile/:id" component={Profile} />
                </LoggedInContextProvider>
                </ServicesContextProvider>
            </Switch>
        );
    }
}

export default withRouter(App);
