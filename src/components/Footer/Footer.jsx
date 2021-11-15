import React from 'react';
import {ReactComponent as IcLogo} from '../../assets/icons/ic_logo.svg'
import {ReactComponent as IcFb} from '../../assets/icons/ic_footer-FB.svg'
import {ReactComponent as IcInst} from '../../assets/icons/ic_footer-inst.svg'
import {ReactComponent as IcYt} from '../../assets/icons/ic_footer-YT.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer_top">
          <a href="https://" className="footer__logo">
            <IcLogo/>
          </a>

          <ul className="footer__mess">
            <li className="footer__mess-item">
              <a href="https://">
                <IcInst/>
              </a>
            </li>
            <li className="footer__mess-item">
              <a href="https://">
                <IcFb/>
              </a>
            </li>
            <li className="footer__mess-item">
              <a href="https://">
                <IcYt/>
              </a>
            </li>
          </ul>

          <a href="mailto:mgok@edu.mos.ru" className="footer__link">mgok@edu.mos.ru</a>

          <a href="tel:+7 (495) 491-92-25" className="footer__link">+7 (495) 491-92-25</a>
        </div>

        <hr />

        <div className="footer_bottom">
          <ul className="footer__links">
            <li className="footer__link-item">
              <a href="https://">Обучение</a>
            </li>
            <li className="footer__link-item">
              <a href="https://">Вакансии</a>
            </li>
            <li className="footer__link-item">
              <a href="https://">Резюме</a>
            </li>
            <li className="footer__link-item">
              <a href="https://">О нас</a>
            </li>
          </ul>
        </div>

        <span className="footer__copyrights">Copyright © 2021. МГОК. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;