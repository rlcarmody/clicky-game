import React from 'react';

function Score(props) {
  return (
    <div>
      <span>Score : {props.score}</span> | <span>High Score: {props.highScore}</span>
    </div>
  );
}

export default Score;