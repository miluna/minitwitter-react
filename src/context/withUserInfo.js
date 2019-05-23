import React from 'react';
import { LoggedInContext } from "./LoggedInContext";

const withUserInfo = (Component) => {
  return (props) => (
    <LoggedInContext.Consumer>
      {context =>  <Component {...props} user={context.user} />}
    </LoggedInContext.Consumer>
  )
};

export default withUserInfo;
