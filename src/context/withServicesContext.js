import React from 'react';
import { ServicesContext } from "./ServicesContext";

const withServicesContext = (Component) => {
  return (props) => (
      <ServicesContext.Consumer>
           {context =>  <Component {...props} {...context} />}
      </ServicesContext.Consumer>
  )
};

export default withServicesContext;