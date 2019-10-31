import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('contacts')}</h1>
    </div>
  );
};

export { Contacts as default };
