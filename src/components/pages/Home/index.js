import React, { useEffect } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import RotateText from '../../RotateText';
import { usePunkraftBackground } from '../../../utils/hooks/backgroundContext';

const Home = () => {
  const { t } = useTranslation();
  const selectedWords = t('selectedWords', { returnObjects: true });
  const { toggleVideo, toggleLines } = usePunkraftBackground();
  useEffect(() => {
    toggleVideo(true);
    toggleLines(true);
  }, []);
  return (
    <div className="home-content">
      <RotateText clauses={t('titles', { returnObjects: true })} selectedWords={selectedWords} />
      <a href="/" className="reserve">
        забронювати стіл
      </a>
      <footer />
    </div>
  );
};

export { Home as default };
