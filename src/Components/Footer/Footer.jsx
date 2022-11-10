import { Link } from "react-router-dom";

import "./Footer.scss";

import shinyLogo from "../../../logo.svg";
import avitoLogo from "../../Lib/Icons/Avito.svg";
import instagramLogo from "../../Lib/Icons/instagram.svg";
import phoneIcon from "../../Lib/Icons/phone-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__conatainer">
          <img src={shinyLogo} alt="Shiny Logo" width={175} height={86} />
          <div className="footer__wrapper">
            <nav className="footer__navbar">
              <div className="footer__navbar__top">
                <ul className="footer__navbar__list">
                  <li className="footer__navbar__item">
                    <Link to="/" className="footer__navbar__item__link">
                      Услуги
                    </Link>
                  </li>
                  <li className="footer__navbar__item">
                    <Link to="/" className="footer__navbar__item__link">
                      Преимущества
                    </Link>
                  </li>
                  <li className="footer__navbar__item">
                    <Link to="/" className="footer__navbar__item__link">
                      Работы
                    </Link>
                  </li>
                  <li className="footer__navbar__item">
                    <Link to="/" className="footer__navbar__item__link">
                      Цены
                    </Link>
                  </li>
                </ul>
                <Link to="/" className="footer__navbar__tel__link">
                  <img
                    src={phoneIcon}
                    alt="Phone icon"
                    width={13}
                    height={13}
                  />
                  8 (800) 555-13-26
                </Link>
              </div>
              <div className="footer__navbar__bottom">
                <img src={avitoLogo} alt="Avito Logo" width={112} height={28} />
                <img
                  src={instagramLogo}
                  alt="Instagran Logo"
                  width={22}
                  height={22}
                />
                <a
                  href="https://www.whatsapp.com/"
                  className="footer__navbar__bottom__link"
                >
                  Написать директору в WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <span className="footer__line"></span>

      <p className="footer__text">2016-2021 &copy; "Шины мигом"</p>
    </footer>
  );
};

export default Footer;
