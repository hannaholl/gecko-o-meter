import React from 'react';
import PointerMeter from './PointerMeter';
import Unit from './Unit';

import '../../sass/gecko-meter.scss';

class GeckoMeter extends React.Component {
  render() {
    // If min < max, just swap them for now. In production this should probably cause an error and let the user know the data is invalid?
    const min = Math.min(this.props.min, this.props.max);
    const max = Math.max(this.props.min, this.props.max);
    if (this.props.min > this.props.max) {
      console.warn('Min is more than max, but they\'ve been swapped around for the purpose of this demo.');
    }

    const range = max - min;
    const correctedStartValue = this.props.value - min;
    const percentage = correctedStartValue / range;

    return (
      <div className="gecko-meter">
        <div className="gecko-meter__unit gecko-meter__unit--min"><Unit value={min} format={this.props.format} unit={this.props.unit} /></div>
        <div className="gecko-meter__unit gecko-meter__unit--max"><Unit value={max} format={this.props.format} unit={this.props.unit} /></div>
        <div className="gecko-meter__unit gecko-meter__unit--value"><Unit value={this.props.value} format={this.props.format} unit={this.props.unit} /></div>
        <PointerMeter percentage={percentage} />
      </div>
    );
  }
}

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
