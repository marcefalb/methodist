import React from "react";
import {Link} from 'react-router-dom'

import { ReactComponent as IcLogo } from "../../assets/icons/ic_logo.svg";
import { ReactComponent as IcLike } from "../../assets/icons/ic_header-like.svg";
import { ReactComponent as IcBell } from "../../assets/icons/ic_header-bell.svg";
import { ReactComponent as IcComment } from "../../assets/icons/ic_header-comment.svg";
import { ReactComponent as IcUser } from "../../assets/icons/ic_header-user.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <Link to="/" className="header__logo">
          <IcLogo />
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/page">Вакансии</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/page">Резюме</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/">Запрос на специалиста</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/page">Корпоративный стандарт</Link>
            </li>
          </ul>
        </nav>
        <div className="header__account">
          <ul className="header__account-list">
            <li className="header__account-item">
              <a href="https://" className="header__account-link">
              <IcLike />
              </a>
            </li>
            <li className="header__account-item">
              <a href="https://" className="header__account-link">
              <IcBell />
              </a>
            </li>
            <li className="header__account-item">
              <a href="https://" className="header__account-link">
                <IcComment />
              </a>
            </li>
            <li className="header__account-item">
              <a href="https://" className="header__account-link">
                <IcUser className="header__account-user" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
