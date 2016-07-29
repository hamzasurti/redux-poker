import { openCards } from '../actions';
import { connect } from 'react-redux'
import gameButton from '../components/gameButton';

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(openCards());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
    type:'Open Cards',
  };
};

const OpenCardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(gameButton);

export default OpenCardsContainer;
