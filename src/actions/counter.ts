import { CounterTypes } from '../action_types';

export const increment = () => ({
  type: CounterTypes.INCRE_NUMBER,
});

export const decrement = () => ({
  type: CounterTypes.DECRE_NUMBER,
});

export const incrementByAmount = (amount) => ({
  type: CounterTypes.INCRE_NUMBER_BY_AMOUNT,
  payload: amount,
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};
