import React from 'react'

import emptyCellImage from '../images/empty_cell.png'
import redCellImage from '../images/red_cell.png'
import yellowCellImage from '../images/yellow_cell.png'

class Connect4Cell extends React.Component {
  // Props:
  //   - content: Integer representing the content of the cell

  render() {
    return <td onClick={this.props.onclick}><img src={this.imageForCell()} width="50" length="50"/></td>
  };

  imageForCell() {
    return {
      [CONTENTS.EMPTY]: emptyCellImage,
      [CONTENTS.RED]: redCellImage,
      [CONTENTS.YELLOW]: yellowCellImage,
    }[this.props.content];
  }
}

const CONTENTS = {
  EMPTY: 0,
  RED: 1,
  YELLOW: 2
}

export {Connect4Cell, CONTENTS}
