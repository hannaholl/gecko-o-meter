import React from 'react';
import PointerMeter from './PointerMeter';

class GeckoMeter extends React.Component {
  render() {
    const min = Math.min(this.props.min, this.props.max);
    const max = Math.max(this.props.min, this.props.max);

    if (this.props.min > this.props.max) {
      console.warn('Min is more than max, but they\'ve been swapped around for the purpose of this demo.');
    }

    const range = max - min;
    const correctedStartValue = this.props.value - min;
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
