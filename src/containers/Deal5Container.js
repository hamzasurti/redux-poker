import { deal } from '../actions';
import { connect } from 'react-redux'
import gameButton from '../components/gameButton';

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(deal());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
    type:'Deal 5',
  };
};

const Deal5Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(gameButton);

export default Deal5Container;
