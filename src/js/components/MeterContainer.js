import React from 'react';
import Network from '../helpers/Network';
import GeckoMeter from './GeckoMeter';

class DemoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    Network.getRandomData()
      .then(data => {
        console.log(data);
        this.setState({ data });
      })
      .catch(() => {
        // Show error
      });
  }

  render() {
    return (
      <div className="meter-container">
        <GeckoMeter {...this.state.data} />
      </div>
    );
  }
}

export default DemoContainer;
