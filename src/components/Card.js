import React, { PropTypes } from 'react';

const Card = ({ card, onCardClick,cardColorSwitch }) =>  {
  const cardStyles = {
    width:'80px',
    height:'80px',
    backgroundColor:card.flipped ? 'white' : 'black',
    display: 'inline-block',
    margin: '2'
  }
  return (
    <div className='card'
    style={cardStyles}
    onClick={(e) => {
      if (cardStyles.backgroundColor === 'black') {
        cardColorSwitch(card.card);
      } else onCardClick(card.card)
    }}
    >
    {card.card}
    </ div>
  );
}

export default Card;
