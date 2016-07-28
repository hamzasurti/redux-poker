import { openCards } from '../actions';
import { connect } from 'react-redux'
import gameButton from '../components/gameButtons';


const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (e) => {
      dispatch(openCards(e));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cells: state,
  };
};

const BattleshipApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(gameButton);

export default BattleshipApp;
