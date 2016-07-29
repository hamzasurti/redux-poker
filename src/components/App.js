import React, { Component } from 'react';
import OpenCardsContainer from '../containers/OpenCardsContainer';
import ShuffleCardsContainer from '../containers/ShuffleCardsContainer';
import Deal5Container from '../containers/Deal5Container';
import CardContainer from '../containers/CardContainer'

const App = () =>{
  return (
    <div>
    <h1>Cardgame</ h1>
    <OpenCardsContainer />
    <ShuffleCardsContainer />
    <Deal5Container />
    <CardContainer />
    </div>
  );
}

export default App;
