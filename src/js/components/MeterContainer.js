import React from 'react';
import Network from '../helpers/Network';
import GeckoMeter from './GeckoMeter';

class MeterContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
      error: '',
    };
  }
  componentDidMount() {
    Network.getRandomData()
      .then(data => {
        console.log('data', data);
        this.setState({ data });
      })
      .catch(() => {
        this.setState({ error: 'There was an error loading the data. Please try again.' });
      });
  }

  render() {
    // Check if there is an error in the state, if so show the error message.
    // Otherwise render the GeckoMeter if the data has been retrieved, or show a loading message.
    return (
      <div className="meter-container">
        {this.state.error ? this.state.error : this.state.data ? <GeckoMeter {...this.state.data} /> : 'Loading data...'}
      </div>
    );
  }
}

export default MeterContainer;
