import React from 'react'

export default function PlayersDisplay(props)  {
  // Props:
  //  - player_1
  //  - player_2
  return (
    <div>
      <span>{props.player_1}</span>
        &nbsp;VS&nbsp;
      <span>{props.player_2}</span>
    </div>
  );
};
