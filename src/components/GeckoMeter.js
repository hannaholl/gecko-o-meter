import React from 'react';
import PointerMeter from './PointerMeter';

class GeckoMeter extends React.Component {
  render() {
    const range = this.props.max - this.props.min;
    const correctedStartValue = this.props.value - this.props.min;
    const percentage = correctedStartValue / range;

    return (
      <div>
        <PointerMeter percentage={percentage} />
      </div>
    );
  }
}

GeckoMeter.defaultProps = {
  min: 0,
  max: 100,
};

GeckoMeter.propTypes = {
  max: React.PropTypes.number,
  min: React.PropTypes.number,
  value: React.PropTypes.number,
  format: React.PropTypes.string,
  unit: React.PropTypes.string,
};

export default GeckoMeter;
