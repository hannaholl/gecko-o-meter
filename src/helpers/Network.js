import axios from 'axios';

const URL_FIXED = 'https://widgister.herokuapp.com/challenge/frontend?fixed=1';
const URL_RANDOM = 'https://widgister.herokuapp.com/challenge/frontend';

export default {

  getFixedData() {
    return axios.get(URL_FIXED)
      .then(response => response.data);
  },

  getRandomData() {
    return axios.get(URL_RANDOM)
      .then(response => response.data);
  },

};
