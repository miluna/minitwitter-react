import React from 'react';
import { ServicesContext } from "./ServicesContext";

const withContext = (Component) => {
  return (props) => (
      <ServicesContext.Consumer>
           {context =>  <Component {...props} services={context} />}
      </ServicesContext.Consumer>
  )
}

export default withContext;