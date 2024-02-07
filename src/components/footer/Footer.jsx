import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">RGL</h1>

        {/*<ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">
            {t("header.about")}
          </a>
        </li>
        <li>
          <a href="#projects" className="footer__link">
            {t("header.projects")}
          </a>
        </li>
  </ul>*/}

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/rociogarcialofrano/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/RocioGL33"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; {t("footer.copy")}</span>
      </div>
    </footer>
  );
};

export default Footer;
