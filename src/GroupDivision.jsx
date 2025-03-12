import React from 'react';
import PropTypes from 'prop-types';

function GroupDivision({ dividend, divisor }) {
  const balls = [];
  for (let i = 0; i < dividend; i++) {
    balls.push(<div key={i} className="ball"></div>);
  }

  const groups = [];
  for (let i = 0; i < divisor; i++) {
    groups.push([]);
  }

  let groupIndex = 0;
  const remainder = dividend % divisor;
  const quotient = Math.floor(dividend / divisor);

  for (let i = 0; i < dividend - remainder; i++) {
    groups[groupIndex].push(balls[i]);
    groupIndex = (groupIndex + 1) % divisor;
  }

  return (
    <div className="group-division">
      {groups.map((group, index) => (
        <div key={index} className="group">
          {/* 各グループに表示するボールの数は商と同じ */}
          {group.slice(0, quotient)}
        </div>
      ))}
      {remainder > 0 && (
        <div className="remainder">
          余り: {remainder}
          {/* 余りのボールを表示 */}
          {balls.slice(dividend - remainder)}
        </div>
      )}
    </div>
  );
}

GroupDivision.propTypes = {
  dividend: PropTypes.number.isRequired,
  divisor: PropTypes.number.isRequired,
};

export default GroupDivision;
