import React, { useState } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const initLanguages = [
    {
      key: 'ru',
      title: 'рус',
      active: true,
    },
    {
      key: 'en',
      title: 'eng',
      active: false,
    },
    {
      key: 'ua',
      title: 'укр',
      active: false,
    },
  ];
  const { t, i18n } = useTranslation();
  const [langs, setLang] = useState(initLanguages);

  const changeLanguage = lng => {
    setLang(
      langs.map(lang => ({ ...lang, active: lang.key === lng })),
    );
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <NavLink className="logo" activeClassName="active" to="/" exact>
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" />
      </NavLink>
      <nav>
        <NavLink activeClassName="active" to="/menu">
          {t('menu')}
        </NavLink>
        <NavLink activeClassName="active" to="/events">
          {t('events')}
        </NavLink>
        <NavLink activeClassName="active" to="/contacts">
          {t('contacts')}
        </NavLink>
      </nav>
      <ul className="header__language">
        {langs.map(lang => (
          <li key={lang.key}>
            <button
              type="button"
              tabIndex="0"
              className={lang.active ? 'active' : ''}
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

export { Header as default };
