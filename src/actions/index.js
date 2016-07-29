export const openCards = () => {
  return {
    type: 'OPEN_CARDS'
  }
}

export const shuffleCards = (cards) => {
  return {
    type: 'SHUFFLE_CARDS',
  }
}

export const deal = () => {
  return {
    type: 'DEAL-FIVE'
  }
}

export const flipCard = (card) => {
  return {
    type: 'FLIP_CARD',
    card,
  }
}

export const switchCard = (card) => {
  return {
    type: 'SWITCH_CARD',
    card,
  }
}
