import React from 'react';
import PointerMeter from './PointerMeter';

class GeckoMeter extends React.Component {
  render() {
    return (
      <div>
        <PointerMeter />
      </div>
    );
  }
}

GeckoMeter.defaultProps = {
  min: 0,
  max: 100,
  currentValue: 50,
};

GeckoMeter.propTypes = {
  max: React.PropTypes.number,
  min: React.PropTypes.number,
  currentValue: React.PropTypes.number,
  format: React.PropTypes.string,
  unit: React.PropTypes.string,
};

export default GeckoMeter;
