import React, { useEffect, useState } from 'react';
import { useEventListener } from '../../utils/hooks/useEventListener';
import { resizeAllMasonryItems } from '../../utils/masonry';

const MenuList = ({ menu, activeFilter }) => {
  const [filteredMenu, setFilteredMenu] = useState(null);

  const updateMenu = () => {
    setFilteredMenu(
      menu.filter(menuItem => {
        return menuItem.category === (activeFilter ? activeFilter.key : 'beer');
      })
    );
  };

  useEffect(() => {
    updateMenu();
  }, [activeFilter]);

  useEffect(() => {
    resizeAllMasonryItems();
  }, [filteredMenu]);

  useEventListener('resize', resizeAllMasonryItems);

  return (
    <div className="menu-list">
      {filteredMenu &&
        filteredMenu.map(menuItem => {
          return (
            <div className="menu-item" key={menuItem.category}>
              <div className="content">
                <div className="item-title">{menuItem.title}</div>
                {menuItem.items.map((itemContent, i) => {
                  return (
                    <div className="item-position" key={i}>
                      <h2>
                        {itemContent.title}
                        <span>
                          {itemContent.price}
                          UAH
                        </span>
                      </h2>
                      {itemContent.content.map((content, j) => {
                        return <p key={j}>{content}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      {activeFilter && (
        <div
          className="menu-icon"
          style={{
            WebkitMaskImage: `url('${activeFilter.icon}')`,
            maskImage: `url('${activeFilter.icon}')`
          }}
        />
      )}
    </div>
  );
};

export { MenuList as default };
