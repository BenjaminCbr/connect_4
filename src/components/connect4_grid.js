import React from 'react'
import {Connect4Cell, _} from './connect4_cell'

export default class Connect4Grid extends React.Component {
  // Props:
  //   - grid_content_list: array of arrays telling for each cell what is the content, between
  //     EMPTY, RED or YELLOW

  render() {
    return (
      <table style={{backgroundColor: "blue"}}>
        {this.props.grid_content_list.map((line, i) => {
          return [
            <tr>
              {line.map((cell, j) => {return <Connect4Cell content={cell}/>})}
              </tr>
            ];
          })
        }
      </table>
    )
  };
};
