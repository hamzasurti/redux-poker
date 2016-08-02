import React, { Component } from 'react';
import Card from './Card'

// div containing all of the cards
const CardBox = ({onCardClick,cardColorSwitch,inPlay}) =>{
  let cards = [];
  if (inPlay) {
    cards = inPlay.map((item) => {
    return < Card
        key ={item.card}
        card={item}
        onCardClick={onCardClick}
        cardColorSwitch={cardColorSwitch}
      />
    })
  }
  return (
    <div>
    { cards }
    </div>
  );
}

export default CardBox;
