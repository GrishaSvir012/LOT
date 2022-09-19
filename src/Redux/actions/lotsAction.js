import axios from 'axios';
import GET_LOTS from '../types';

const getLots = () => (dispatch) => {
  axios.get('https://development.alliance-eco.ru:8100/api/lots/best')
    .then((res) => dispatch({ type: GET_LOTS, payload: res.data }));
};

export default getLots;
