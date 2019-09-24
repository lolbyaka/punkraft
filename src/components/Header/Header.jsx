import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Header = props => {
  const { t, i18n } = useTranslation();
  const [langs, setLang] = useState([
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
  ]);
  let currentLang = "ru";

  const changeLanguage = lng => {
    currentLang = lng;
    setLang(
      langs.map(lang => {
        lang.active = lang.key == lng ? true : false;
        return lang;
      })
    );
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <NavLink className="logo" to="/">
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/menu">
              {t("menu")}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/events">
              {t("events")}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contacts">
              {t("contacts")}
            </NavLink>
          </li>
        </ul>
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
