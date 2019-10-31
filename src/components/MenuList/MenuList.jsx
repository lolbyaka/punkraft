import React, { useEffect, useState } from "react";
import { useEventListener } from "../../utils/hooks/useEventListener";
import { resizeAllMasonryItems } from "../../utils/masonry";

export const MenuList = ({ menu, activeFilter }) => {
  const [filteredMenu, setFilteredMenu] = useState(null);

  const updateMenu = () => {
    setFilteredMenu(
      menu.filter(menuItem => {
        return menuItem.category === (activeFilter ? activeFilter.key : "beer");
      })
    );
  };

  useEffect(() => {
    updateMenu();
  }, [activeFilter]);

  useEffect(() => {
    resizeAllMasonryItems();
  }, [filteredMenu]);

  useEventListener("resize", resizeAllMasonryItems);

  return (
    <div className="menu-list">
      {filteredMenu &&
        filteredMenu.map((menuItem, i) => {
          return (
            <div className="menu-item" key={i}>
              <div className="content">
                <div className="item-title">{menuItem.title}</div>
                {menuItem.items.map((itemContent, i) => {
                  return (
                    <div className="item-position" key={i}>
                      <h2>
                        {itemContent.title} <span>{itemContent.price} UAH</span>
                      </h2>
                      {itemContent.content.map((content, i) => {
                        return <p key={i}>{content}</p>;
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
        ></div>
      )}
    </div>
  );
};
