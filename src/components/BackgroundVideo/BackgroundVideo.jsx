import React from "react";
import "./BackgroundVideo.scss";

const BackgroundVideo = props => {
  return (
    <>
      <div className="background-video">
        <div className="background-video__overlay"></div>
        <video autoPlay muted loop className="fullscreen-bg__video">
          <source
            src={`${process.env.PUBLIC_URL}/background.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default BackgroundVideo;
