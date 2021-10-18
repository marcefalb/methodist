import React from 'react';
import {ReactComponent as IcLogo} from '../../assets/icons/ic_logo.svg'
import {ReactComponent as IcFb} from '../../assets/icons/ic_footer-facebook.svg'
import {ReactComponent as IcInst} from '../../assets/icons/ic_footer-inst.svg'
import {ReactComponent as IcYt} from '../../assets/icons/ic_footer-youtube.svg'
import {ReactComponent as IcWa} from '../../assets/icons/ic_footer-whatsapp.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a href="/">
          <IcLogo/>
        </a>
        <p className="footer__description">Данный контент не несёт в себе призыва к каким-либо действиям, так же оно не призываем Вас совершать что-либо.</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="/">Обучение</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Вакансии</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">Резюме</a>
            </li>
            <li className="footer__nav-item">
              <a href="/">О нас</a>
            </li>
          </ul>
        </nav>
        <div className="footer__messengers">
          <ul className="footer__messenger-list">
            <li className="footer__messenger-item">
              <a href="/"><IcFb/></a>
            </li>
            <li className="footer__messenger-item">
              <a href="/"><IcInst/></a>
            </li>
            <li className="footer__messenger-item">
              <a href="/"><IcYt/></a>
            </li>
            <li className="footer__messenger-item">
              <a href="/"><IcWa/></a>
            </li>
          </ul>
        </div>
        <span className="footer__copyrights">Copyright &#169; 2021. АРЧК. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;