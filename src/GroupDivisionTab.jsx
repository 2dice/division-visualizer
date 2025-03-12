import React from 'react';
import PropTypes from 'prop-types';
import GroupDivision from './GroupDivision';
import Slider from './Slider';

function GroupDivisionTab({
  dividend,
  divisor,
  onDividendChange,
  onDivisorChange,
}) {
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;

  return (
    <div>
      <Slider
        label="割られる数"
        min={1}
        max={50}
        value={dividend}
        onChange={onDividendChange}
      />
      <Slider
        label="割る数"
        min={1}
        max={10}
        value={divisor}
        onChange={onDivisorChange}
      />
      <p>
        {dividend} ÷ {divisor} = {quotient} あまり {remainder}
      </p>
      <GroupDivision dividend={dividend} divisor={divisor} />
    </div>
  );
}

GroupDivisionTab.propTypes = {
  dividend: PropTypes.number.isRequired,
  divisor: PropTypes.number.isRequired,
  onDividendChange: PropTypes.func.isRequired,
  onDivisorChange: PropTypes.func.isRequired,
};

export default GroupDivisionTab;
