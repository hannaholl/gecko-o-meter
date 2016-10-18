import React from 'react';

// For now, only support these currency symbols. We could get this data from an API or db in the future instead of hard coding them here.
const currencyUnits = {
  GBP: '£',
  EUR: '€',
  USD: '$',
};

const Unit = (props) => {
  let print = props.value;

  if (props.format === 'currency' && currencyUnits[props.unit]) {
    // If the format is currency and we have a symbol for the unit, show the currency symbol before the value
    print = `${currencyUnits[props.unit]}${props.value}`;
  }
  else if (props.unit) {
    // If we have a unit but not matching currency symbol, simply display the unit after the value
    print = `${props.value} ${props.unit}`;
  }

  return (
    <div className="unit">
      {print}
    </div>
  );
};

Unit.propTypes = {
  value: React.PropTypes.number.isRequired,
  format: React.PropTypes.string,
  unit: React.PropTypes.string,
};

export default Unit;
