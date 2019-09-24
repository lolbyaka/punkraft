import React from "react";
import { useTranslation } from "react-i18next";

export const Contacts = props => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("contacts")}</h1>
    </div>
  );
};
