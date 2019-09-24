import React from "react";
import { useTranslation } from "react-i18next";

export const Events = props => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("events")}</h1>
    </div>
  );
};
