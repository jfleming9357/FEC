import React from 'react';

export const CustomSelect = ({ options, defaultTitle }) => {
  return (
    <div className="custom-select-wrapper">
      <div className="custom-select">
        <div className="custom-select__trigger">
          <span>{defaultTitle}</span>
          <div className="arrow"></div>
        </div>
        <div className="custom-options">
          {options.map((option) => (
            <span className="custom-option">{option}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
