import axios from 'axios';

const URL = 'https://widgister.herokuapp.com/challenge/frontend?fixed=1';

export default {

  getData() {
    return axios.get(URL)
      .then(response => response.data);
  },

};
