import React, { useEffect, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DashLoading } from 'respinner';
import MenuList from '../../MenuList/MenuList';
import MenuFilter from '../../MenuFilter/MenuFilter';
import './Menu.scss';
import { PunkraftContext } from '../../../App';
import { loadMenu, loadFilters } from '../../../api/json/menu';

const Menu = () => {
  const { t } = useTranslation();
  const { toggleVideo, toggleLines } = useContext(PunkraftContext);
  const [menu, setMenu] = useState(null);
  const [filters, setFilters] = useState(null);

  const toggleFilter = filterKey => {
    setFilters(
      filters.map(filter => {
        return { ...filter, active: filter.key === filterKey };
      })
    );
  };

  useEffect(() => {
    toggleVideo(false);
    toggleLines(false);
    (async () => {
      setFilters(await loadFilters());
      setMenu(await loadMenu());
    })();
  }, []);

  useEffect(() => {
    if (filters) {
      toggleFilter('beer');
    }
  }, [menu]);

  const returnActiveFilter = () => filters.filter(item => item.active)[0];

  return (
    <div className="menu-container">
      <h1>
        {t('menu')}
        {!filters && !menu && <DashLoading size={40} stroke="#fb5d31" duration={1.6} />}
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

export { Menu as default };
