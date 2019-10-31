import React, { useEffect, useContext } from "react";
import "./Home.scss";
import { useTranslation } from "react-i18next";
import { RotateText } from "../../RotateText/RotateText";
import { PunkraftContext } from "../../../App";

export const Home = props => {
  const { t } = useTranslation();
  const selectedWords = t("selectedWords", { returnObjects: true });
  const { toggleVideo, toggleLines } = useContext(PunkraftContext);
  useEffect(() => {
    toggleVideo(true);
    toggleLines(true);
  }, []);
  return (
    <div className="home-content">
      <RotateText
        clauses={t("titles", { returnObjects: true })}
        selectedWords={selectedWords}
      />
      <a href="/" className="reserve">
        забронювати стіл
      </a>
      <footer></footer>
    </div>
  );
};
