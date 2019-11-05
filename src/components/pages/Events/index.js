import React from 'react';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('events')}</h1>
    </div>
  );
};

export { Events as default };
