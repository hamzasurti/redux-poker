import { switchCard, flipCard } from '../actions';
import { connect } from 'react-redux'
import CardBox from '../components/CardBox';

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (card) => {
      dispatch(switchCard(card));
    },
    cardColorSwitch: (card) => {
      dispatch(flipCard(card))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    inPlay: state.OpenCards.inPlay
  };
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardBox);

export default CardContainer;
