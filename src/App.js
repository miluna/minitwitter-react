import React, {Component} from 'react';
import './App.css';
import { Switch, Route, withRouter } from "react-router";
import Login from './layout/Login';
import Profile from './layout/Profile';
import Feed from './components/FeedComponent';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Feed} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile/:id" component={Profile} />
            </Switch>
        );
    }
}

export default withRouter(App);
