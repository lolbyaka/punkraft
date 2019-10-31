import React, { useContext } from "react";
import "./BackgroundVideo.scss";
import { PunkraftContext } from "../../App";

const BackgroundVideo = props => {
  const { video, lines } = useContext(PunkraftContext);
  return (
    <>
      {video && (
        <div className="background-video">
          <div className="background-video__overlay"></div>
          <video autoPlay muted loop className="fullscreen-bg__video">
            <source
              src={`${process.env.PUBLIC_URL}/background.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
      )}
      {lines && (
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}
    </>
  );
};

export default BackgroundVideo;
