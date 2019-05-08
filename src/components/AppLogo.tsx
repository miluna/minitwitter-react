import React from 'react'
import logo from '../media/logo.png';
import PropTypes from 'prop-types'

const AppLogo = (props: any) => {
    const { className } = props;
  return (
    <div className={className} >
        <img src={logo} />
    </div>
  )
};

AppLogo.propTypes = {
    className: PropTypes.string,
};

AppLogo.defaultProps = {
    className: "app-logo",
};

export default AppLogo;
