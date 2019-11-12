import React from 'react';
import { animated, useTrail } from 'react-spring';
import './styles.scss';

const MenuFilter = ({ filters, toggleFilter }) => {
  const trail = useTrail(filters.length, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });
  return (
    filters && (
      <div className="filter">
        {trail.map((props, i) => (
          <animated.div
            style={props}
            role="button"
            tabIndex="0"
            className="filter__item"
            key={filters[i].key}
            onKeyDown={() => toggleFilter(filters[i].key)}
            onClick={() => toggleFilter(filters[i].key)}
          >
            <span className="text">{filters[i].title}</span>
            <span
              className={`icon ${filters[i].active ? 'active' : ''}`}
              style={{
                WebkitMaskImage: `url('${filters[i].icon}')`,
                maskImage: `url('${filters[i].icon}')`,
              }}
            />
          </animated.div>
        ))}
      </div>
    )
  );
};

export { MenuFilter as default };
