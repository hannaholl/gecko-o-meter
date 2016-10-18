import React from 'react';
import Network from '../helpers/Network';

class DemoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    Network.getData()
      .then(data => {
        this.setState({ data });
      })
      .catch(() => {
        // Show error
      });
  }

  render() {
    return (
      <div className="meter-container">

      </div>
    );
  }
}

export default DemoContainer;
