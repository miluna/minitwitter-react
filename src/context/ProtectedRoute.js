import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {LoggedInContext} from "./LoggedInContext";

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        <LoggedInContext.Consumer>
            {({ user, isAuthenticated }) => {
                if (isAuthenticated) {
                    return <Component {...props} user={user} />
                } else {
                    return <Redirect to='/login'/>
                }
            }}
        </LoggedInContext.Consumer>
    )}/>
);

export default ProtectedRoute;
