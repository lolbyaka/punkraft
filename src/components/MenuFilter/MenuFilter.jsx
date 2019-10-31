import React from 'react';
import './MenuFilter.scss';

const MenuFilter = ({ filters, toggleFilter }) => {
  return (
    filters && (
      <div className="filter">
        {filters.map(filter => {
          return (
            <div
              role="button"
              tabIndex="0"
              className="filter__item"
              key={filter.key}
              onKeyDown={() => toggleFilter(filter.key)}
              onClick={() => toggleFilter(filter.key)}
            >
              <span className="text">{filter.title}</span>
              <span
                className={`icon ${filter.active ? 'active' : ''}`}
                style={{
                  WebkitMaskImage: `url('${filter.icon}')`,
                  maskImage: `url('${filter.icon}')`
                }}
              />
            </div>
          );
        })}
      </div>
    )
  );
};

export { MenuFilter as default };
