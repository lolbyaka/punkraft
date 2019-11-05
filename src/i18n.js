import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import translations from './translations';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: translations,
  });

export default i18n;
