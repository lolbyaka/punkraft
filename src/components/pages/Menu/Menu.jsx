import React from "react";
import { useTranslation } from "react-i18next";

export const Menu = props => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("menu")}</h1>
    </div>
  );
};
