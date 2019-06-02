import React from 'react';

function Score(props) {
  return (
    <>
      <span>Score : {props.score}</span> | <span>High Score: {props.highScore}</span>
    </>
  );
}

export default Score;