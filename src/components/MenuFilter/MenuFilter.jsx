import React from "react";
import "./MenuFilter.scss";

export const MenuFilter = ({ filters, toggleFilter }) => {
  return (
    filters && (
      <div className="filter">
        {filters.map((filter, i) => {
          return (
            <div
              className="filter__item"
              key={i}
              onClick={() => toggleFilter(filter.key)}
            >
              <span className="text">{filter.title}</span>
              <span
                className={`icon ${filter.active ? "active" : ""}`}
                style={{
                  WebkitMaskImage: `url('${filter.icon}')`,
                  maskImage: `url('${filter.icon}')`
                }}
              ></span>
            </div>
          );
        })}
      </div>
    )
  );
};
