import React from 'react'
import ReactDom from 'react-dom'
import Game from './game'

export default function App(props) {
  return (
    <Game player_1={props.player_1} player_2={props.player_2} />
  );
};
