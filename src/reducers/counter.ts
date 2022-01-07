import { combineReducers } from 'redux';
import { CounterTypes } from '../action_types';

const count = (state = 0, action) => {
  switch (action.type) {
    case CounterTypes.INCRE_NUMBER: {
      return state + 1;
    }
    case CounterTypes.DECRE_NUMBER: {
      return state - 1;
    }
    case CounterTypes.INCRE_NUMBER_BY_AMOUNT:
    case CounterTypes.INCRE_NUMBER_BY_AMOUNT_ASYNC: {
      return state + action.payload;
    }
    default:
      return state;
  }
};

export default combineReducers({
  count,
});
