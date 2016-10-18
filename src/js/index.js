import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MeterContainer from './components/MeterContainer';

import '../sass/global.scss';

ReactDOM.render((
  <MeterContainer />
), document.getElementById('container'));
