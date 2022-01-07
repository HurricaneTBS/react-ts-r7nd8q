import { connect } from 'react-redux';
import Counter from './counter';
import { CounterSelectors } from '../../selectors';
import { bindActionCreators, Dispatch, ThunkAction } from 'redux';
import { counterActions } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    count: CounterSelectors.count(state),
  };
};

export type CounterActions = {
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  incrementAsync: (amount: number) => ThunkAction<any, any, any>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        ...counterActions,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
