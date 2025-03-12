import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ label, value, min, max, onChange }) => {
  return (
    <div>
      <label>
        {label}:
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {value}
      </label>
    </div>
  );
};

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
