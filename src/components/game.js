import React from 'react'
import PlayersDisplay from './players_display'
import Connect4Grid from './connect4_grid'
import {CONTENTS} from './connect4_cell'

export default class Game extends React.Component {
  // Props:
  //  - player_2: name
  //  - player_1: name
  //
  // Responsibility: game logic:
  //   - Is there a winner?
  //   - Whose turn is it?

  constructor(props) {
    super(props);
    this.state = {
      grid: this.emptyGrid(),
      currentPlayer: CONTENTS.RED
    };
  }

  render() {
    return [
      <PlayersDisplay player_1={this.props.player_1} player_2={this.props.player_2} />,
      <Connect4Grid grid_content_list={this.state.grid} handleClickGenerator={this.handleClickGenerator} />
    ];
  };

  private

  handleClickGenerator = (i, j) => {
    return () => {
      // Cloning former grid
      var newGrid = this.state.grid.map(col => [...col]);

      // Here we need to determine which row should be colored
      var targetColumn = newGrid.map(line => line[j]);
      var firstNonEmptyRow = targetColumn.findIndex(element => element != CONTENTS.EMPTY);
      var rowToFill = firstNonEmptyRow === -1 ? 6 : firstNonEmptyRow - 1;

      // Filling the Cell
      newGrid[rowToFill][j] = this.state.currentPlayer;

      // Changing player turn
      var nextPlayer = this.state.currentPlayer === CONTENTS.RED ? CONTENTS.YELLOW : CONTENTS.RED

      // Setting new state
      this.setState({
        grid: newGrid,
        currentPlayer: nextPlayer
      });
    };
  }

  emptyGrid() {
    return Array.from(new Array(7), (_, __) => {
      return Array.from(new Array(7), (_, __) => {
        return CONTENTS.EMPTY;
      });
    });
  }

  randomGrid() {
    return Array.from(new Array(7), (_, __) => {
      return Array.from(new Array(7), (_, __) => {
        switch(Math.floor(Math.random() * 3)) {
          case 0:
          return CONTENTS.EMPTY;
          case 1:
          return CONTENTS.RED;
          case 2:
          return CONTENTS.YELLOW;
          default:
          return CONTENTS.EMPTY;
        };
      });
    });
  };
};
