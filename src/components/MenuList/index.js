import React, { useEffect, useState } from 'react';
import { animated, useTrail } from 'react-spring';
import PropTypes from 'prop-types';
import useEventListener from '../../utils/hooks/useEventListener';
import { resizeAllMasonryItems } from '../../utils/masonry';

const MenuList = ({ menu, activeFilter }) => {
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    setFilteredMenu(
      menu.filter(
        (menuItem) => menuItem.category === (activeFilter ? activeFilter.key : 'beer'),
      ),
    );
  }, [activeFilter]);

  useEffect(() => {
    resizeAllMasonryItems();
  }, [filteredMenu]);

  const trail = useTrail(filteredMenu.length, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });

  useEventListener('resize', resizeAllMasonryItems);

  return (
    <div className="menu-list">
      {trail.map((props, i) => (
        <animated.div
          style={props}
          className="menu-item"
          key={`${filteredMenu[i].id}`}
        >
          <div className="content">
            <div className="item-title">{filteredMenu[i].title}</div>
            {filteredMenu[i].items.map((itemContent) => (
              <div className="item-position" key={itemContent.id}>
                <h2>
                  {itemContent.title}
                  <span>
                    {itemContent.price}
                    UAH
                  </span>
                </h2>
                {itemContent.content.map((content) => (
                  <p key={content.id}>{content}</p>
                ))}
              </div>
            ))}
          </div>
        </animated.div>
      ))}
      {activeFilter && (
        <animated.div
          className="menu-icon"
          style={{
            WebkitMaskImage: `url('${activeFilter.icon}')`,
            maskImage: `url('${activeFilter.icon}')`,
          }}
        />
      )}
    </div>
  );
};

MenuList.propTypes = {
  menu: PropTypes.array.isRequired,
  activeFilter: PropTypes.array.isRequired,
};

export { MenuList as default };
