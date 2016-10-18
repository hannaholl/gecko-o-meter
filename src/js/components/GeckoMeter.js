import React from 'react';
import PointerMeter from './PointerMeter';
import Unit from './Unit';

import '../../sass/gecko-meter.scss';

const GeckoMeter = (props) => {
  // If min < max, just swap them for now. In production this should probably cause an error and let the user know the data is invalid?
  const min = Math.min(props.min, props.max);
  const max = Math.max(props.min, props.max);
  if (props.min > props.max) {
    console.warn('Min is more than max, but they\'ve been swapped around for the purpose of this demo.');
  }

  const range = max - min;
  const correctedStartValue = props.value - min;
  const percentage = correctedStartValue / range;

  return (
    <div className="gecko-meter">
      <div className="gecko-meter__unit gecko-meter__unit--min"><Unit value={min} format={props.format} unit={props.unit} /></div>
      <div className="gecko-meter__unit gecko-meter__unit--max"><Unit value={max} format={props.format} unit={props.unit} /></div>
      <div className="gecko-meter__unit gecko-meter__unit--value"><Unit value={props.value} format={props.format} unit={props.unit} /></div>
      <PointerMeter percentage={percentage} />
    </div>
  );
};

GeckoMeter.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
};

GeckoMeter.propTypes = {
  max: React.PropTypes.number,
  min: React.PropTypes.number,
  value: React.PropTypes.number,
  format: React.PropTypes.string,
  unit: React.PropTypes.string,
};

export default GeckoMeter;
