import { shuffleCards } from '../actions';
import { connect } from 'react-redux'
import gameButton from './../components/gameButton';

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (e) => {
      dispatch(shuffleCards(e));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
    type:'Shuffle Cards',
  };
};

const ShuffleCardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(gameButton);

export default ShuffleCardsContainer;
