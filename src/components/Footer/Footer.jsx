import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="contacts">
        <div className="time">18:00 - 04:00</div>
        <a href="/" className="map">
          kiyv, vulitsia ihorivska, 14a
        </a>
        <a href="/" className="phone">
          +380 (50) 424 00 24
        </a>
      </div>
      <div className="socials">
        <a href="/" className="social">
          instagram
        </a>
        <a href="/" className="social">
          facebook
        </a>
        <a href="/" className="social">
          tripadvisor
        </a>
      </div>
    </footer>
  );
};

export { Footer as default };
