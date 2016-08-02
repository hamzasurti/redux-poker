const OpenCards = (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_CARDS' :
      return {
        'deck': [...makeDeck()],
        'inPlay': [],
      };
    case 'SHUFFLE_CARDS' :
    // used an array so i could keep the order when cards are dealt
    // even though it makes runtime a little slower
      return {
        'deck': [...shuffleCards(state.deck, state.inPlay)],
        'inPlay': [],
      }
    case 'DEAL-FIVE' :
      return {
        ...playFive(state.deck, state.inPlay)
      }
    case 'FLIP_CARD' :
      return {
        ...flipCard(state.deck, state.inPlay,action.card)
      }
    case 'SWITCH_CARD' :
      return {
        ...switchCard(state.deck, state.inPlay,action.card)
      }
    default:
      return state;
  }
};

function flipCard (deck, inPlay,card) {
  // have to slice otherwise redux wont know changes
  inPlay= inPlay.slice(0);
  for (var i = 0; i < inPlay.length; i++) {
    if (inPlay[i].card === card) {
      inPlay[i].flipped = true;
    }
  }
  return {
    deck,
    inPlay,
  }
}

function switchCard(deck, inPlay,card) {
  // have to slice otherwise redux wont know changes
  inPlay= inPlay.slice(0);
  for (var i = 0; i < inPlay.length; i++) {
    if (inPlay[i].card === card) {
      const newCard = deck.shift();
      inPlay[i]= newCard
      deck.push(card);
    }
  }
  return {
    deck,
    inPlay,
  }
}

// takes five out of the deck
function playFive(deck, inPlay) {
  let newToPlay = deck.splice(0,5);
  newToPlay.forEach((item) => item.flipped = false)
  const newState = {
    deck,
    'inPlay': inPlay.concat(newToPlay),
  }
  return newState;
}

// shuffles in place
function shuffleCards(deck,inPlay) {
  deck = deck.concat(inPlay);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

// makes suits array and rank array and concats them together
function makeDeck() {
  const deck = [];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "J", "Q", "K"];
  const suits = ["C", "D", "H", "S"];
    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < ranks.length; j++) {
        const card = suits[i].concat(ranks[j]);
        deck.push({card,flipped:false});
      }
    }
    return deck;
}

export default OpenCards
