import React, {Component} from 'react';
import './styles/main.css';
import { Switch, Route, withRouter } from "react-router";
import Login from './layout/Login';
import Profile from './layout/Profile';
import Feed from './components/FeedComponent';
import ProtectedRoute from './context/ProtectedRoute';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Feed} />
                <Route exact path="/profile/:id" component={Profile} />
            </Switch>
        );
    }
}

export default withRouter(App);
