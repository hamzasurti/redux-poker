import React, { PropTypes } from 'react';

const gameButton = ({ onButtonClick,type }) =>  {
  return (
    <div>
    <button onClick={onButtonClick}>{type} </button>
    </ div>
  );
}

gameButton.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
  }

export default gameButton;
