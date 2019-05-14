import React, { CSSProperties } from 'react'
import logo from '../media/logo.png';

interface AppLogoProps {
  className: string,
  style: CSSProperties,
  onClick: Function,
}

const AppLogo = (props: AppLogoProps) => {
    const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={() => onClick()} >
        <img src={logo} alt="app-logo"/>
    </div>
  )
};

AppLogo.defaultProps = {
    className: "app-logo",
    style: {},
    onClick: () => {},
};

export default AppLogo;
