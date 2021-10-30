import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
        should_highlight={
          this.props.winningSquares === null ||
          !this.props.winningSquares.includes(i)
            ? false
            : true
        }
      />
    );
  }

  render() {
    let rendered_rows = []; // array of 3 rows

    for (let r = 0; r < 3; r++) {
      let row = [];
      for (let c = 0; c < 3; c++) {
        row.push(this.renderSquare(r * 3 + c));
      }

      rendered_rows.push(
        <div key={r} className="board-row">
          {row}
        </div>
      );
    }

    return rendered_rows;
  }
}

export default Board;
