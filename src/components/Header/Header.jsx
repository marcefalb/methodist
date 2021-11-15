import React from "react";
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
        <a href="https://" className="header__logo">
          <IcLogo />
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="https://">Обучение</a>
            </li>
            <li className="header__nav-item">
              <a href="https://">Вакансии</a>
            </li>
            <li className="header__nav-item">
              <a href="https://">Резюме</a>
            </li>
            <li className="header__nav-item">
              <a href="https://">О нас</a>
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
