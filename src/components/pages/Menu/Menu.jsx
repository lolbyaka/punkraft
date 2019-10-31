import React, { useEffect, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuList } from "../../MenuList/MenuList";
import { MenuFilter } from "../../MenuFilter/MenuFilter";
import "./Menu.scss";
import { PunkraftContext } from "../../../App";
import { loadMenu, loadFilters } from "../../../api/json/menu";
import { DashLoading } from "respinner";

export const Menu = () => {
  const { t } = useTranslation();
  const { toggleVideo, toggleLines } = useContext(PunkraftContext);
  const [menu, setMenu] = useState(null);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    toggleVideo(false);
    toggleLines(false);
    (async () => {
      setFilters(await loadFilters());
      setMenu(await loadMenu());
    })();
  }, []);

  useEffect(() => {
    filters && filters && toggleFilter("beer");
  }, [menu]);

  const returnActiveFilter = () => filters.filter(item => item.active)[0];

  const toggleFilter = filterKey => {
    setFilters(
      filters.map(filter => {
        return { ...filter, active: filter.key === filterKey ? true : false };
      })
    );
  };

  return (
    <div className="menu-container">
      <h1>
        {t("menu")}{" "}
        {!filters && !menu && (
          <DashLoading size={40} stroke="#fb5d31" duration={1.6} />
        )}
      </h1>
      {filters && menu && (
        <>
          <MenuFilter filters={filters} toggleFilter={toggleFilter} />
          <MenuList menu={menu} activeFilter={returnActiveFilter()} />
        </>
      )}
    </div>
  );
};
