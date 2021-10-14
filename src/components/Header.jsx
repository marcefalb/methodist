import React from 'react';
import {ReactComponent as IcLogo} from '../assets/icons/ic_logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <a href="/" className="header__logo">
          <IcLogo/>
        </a>
        <nav className="header__nav"></nav>
        <div className="header__user-links"></div>
      </div>
    </header>
  );
};

export default Header;