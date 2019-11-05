import React from 'react';
import './styles.scss';
import { usePunkraftBackground } from '../../utils/hooks/backgroundContext';

const BackgroundVideo = () => {
  const { video, lines } = usePunkraftBackground();
  return (
    <>
      {video && (
        <div className="background-video">
          <div className="background-video__overlay" />
          <video autoPlay muted loop className="fullscreen-bg__video">
            <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
          </video>
        </div>
      )}
      {lines && (
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}
    </>
  );
};

export default BackgroundVideo;
