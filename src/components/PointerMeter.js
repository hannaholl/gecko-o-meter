import React from 'react';

import '../sass/pointer-meter.scss';

class PointerMeter extends React.Component {
  constructor() {
    super();

    this.minAngle = -90;
    this.maxAngle = 90;
  }

  render() {
    const normalisedPercentage = Math.max(0, Math.min(this.props.percentage, 1)); // Make sure percentage is a number between 0-1.
    const scale = this.maxAngle - this.minAngle;
    const value = normalisedPercentage * scale;
    const angle = this.minAngle + value;

    const pointerStyle = { transform: `rotate(${angle}deg)` };

    return (
      <div className="pointer-meter">
        <div className="pointer-meter__bg"></div>
        <div className="pointer-meter__pointer" style={pointerStyle}></div>
      </div>
    );
  }
}

PointerMeter.defaultProps = {
  percentage: 0.5,
};

PointerMeter.propTypes = {
  percentage: React.PropTypes.number,
};

export default PointerMeter;
