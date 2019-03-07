import React, { Component } from 'react';
import './styles/main.css';
import { Switch, Route, withRouter } from "react-router";
import Login from './layout/Login';
import Profile from './layout/Profile';
import Feed from './components/FeedComponent';
import ProtectedRoute from './context/ProtectedRoute';
import { LoggedInContextProvider } from './context/LoggedInContext';
import { UserService } from './services/UserService';

class App extends Component {
    render() {
        return (
            <Switch>
                <LoggedInContextProvider 
                    history={this.props.history} 
                    userService={new UserService()}
                >
                    <Route exact path="/login" component={Login} />
                    <ProtectedRoute exact path="/" component={Feed} />
                    <Route exact path="/profile/:id" component={Profile} />
                </LoggedInContextProvider>
            </Switch>
        );
    }
}

export default withRouter(App);
