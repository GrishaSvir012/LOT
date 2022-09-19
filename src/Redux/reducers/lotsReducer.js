import GET_LOTS from '../types';

// eslint-disable-next-line default-param-last
const lotsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOTS:
      return payload;
    default:
      return state;
  }
};
export default lotsReducer;
