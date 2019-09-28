import React, { useState } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Header = props => {
  const initLanguages = [
    {
      key: "ru",
      title: "рус",
      active: true
    },
    {
      key: "en",
      title: "eng",
      active: false
    },
    {
      key: "ua",
      title: "укр",
      active: false
    }
  ];
  const { t, i18n } = useTranslation();
  const [langs, setLang] = useState(initLanguages);

  const changeLanguage = lng => {
    setLang(
      langs.map(lang => {
        lang.active = lang.key === lng ? true : false;
        return lang;
      })
    );
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <Link className="logo" to="/">
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" />
      </Link>
      <nav>
        <NavLink activeClassName="active" to="/menu">
          {t("menu")}
        </NavLink>
        <NavLink activeClassName="active" to="/events">
          {t("events")}
        </NavLink>
        <NavLink activeClassName="active" to="/contacts">
          {t("contacts")}
        </NavLink>
      </nav>
      <ul className="header__language">
        {langs.map(lang => (
          <li key={lang.key}>
            <button
              className={lang.active ? "active" : ""}
              onClick={() => changeLanguage(lang.key)}
            >
              {lang.title}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};
