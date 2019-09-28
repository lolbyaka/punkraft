import React, { useEffect } from "react";
import "./Home.scss";
import { useTranslation } from "react-i18next";
import { RotateText } from "../../RotateText";
export const Home = props => {
  const { t } = useTranslation();

  return (
    <div className="home-content">
      <RotateText clauses={t("titles", { returnObjects: true })} />
      <a href="#" className="reserve">
        забронювати стіл
      </a>
      <footer></footer>
    </div>
  );
};
