import React, { Component } from "react";
import Board from "./board";
import calculateWinner from "../helperFunctions.js/calculateWinner";

/*  cd path:
cd '/c/Users/Patri/OneDrive/Desktop/Web Projects/React Projects/tic_tac_toe'
*/

class App extends Component {
   state = {
      // every object concated to this array is a new version of the board
      history: [
         {
            squares: Array(9).fill(null), // how the board looked like
            position: null, // what position was clicked
            move_number: 0,
         },
      ],
      x_is_next: true,
      move_number: 0,
      historyOrder: "ascending",
   };

   handleClick = (i) => {
      // i is the position of the board that was clicked
      const history = this.state.history.slice(0, this.state.move_number + 1);
      const current = history[history.length - 1]; // current is an object (hash map)
      const squares = [...current.squares];

      if (calculateWinner(squares).winner != null || squares[i])
         // if there's a winner or the current square has already been clicked
         return;

      squares[i] = this.state.x_is_next ? "X" : "O";
      const position = {
         row: Math.floor(i / 3) + 1,
         col: (i % 3) + 1,
      };

      this.setState({
         history: history.concat({
            squares: squares,
            position: position,
            move_number: history.length,
         }),
         move_number: history.length,
         x_is_next: !this.state.x_is_next,
      });
   };

   jumpTo = (move) => {
      this.setState({
         move_number: move,
         x_is_next: move % 2 === 0,
      });
   };

   handleToggle = () => {
      const newOrder =
         this.state.historyOrder === "ascending" ? "descending" : "ascending";
      this.setState({
         historyOrder: newOrder,
      });
   };

   render() {
      const history =
         this.state.historyOrder === "ascending"
            ? this.state.history
            : JSON.parse(JSON.stringify(this.state.history)).reverse();
      const current = this.state.history[this.state.move_number]; // current may change if the user jumps to part of the history

      const moves = history.map((step, i) => {
         const desc =
            step.move_number === 0
               ? "Go to game start"
               : "Go to move #" +
                 step.move_number +
                 ": " +
                 (step.move_number % 2 === 0 ? "O" : "X") +
                 " at row " +
                 step.position.row +
                 ", col " +
                 step.position.col;
         
         return (
            <li key={i}>
               <button
                  onClick={() => {
                     this.jumpTo(step.move_number);
                  }}
                  className={step.move_number === this.state.move_number ? "curr-move" : ""}
               >
                  {desc}
               </button>
            </li>
         );
      });

      const winnerInfo = calculateWinner(current.squares);
      let status = winnerInfo.winner
         ? "Winner: " + winnerInfo.winner
         : this.state.move_number === 9
         ? "Draw"
         : "Next player: " + (this.state.x_is_next ? "X" : "O");

      return (
         <>
            <div className="title">React Tic-Tac-Toe</div>
            <div className="game">
               <div className="game-board">
                  <Board
                     winningSquares={winnerInfo.winningSquares}
                     squares={current.squares}
                     onClick={(i) => this.handleClick(i)}
                  />
               </div>
               <div className="game-info">
                  <div>{status}</div>
                  <p>Current history order: {this.state.historyOrder}</p>
                  <button onClick={this.handleToggle} className="toggle-btn">
                     Toggle History Order
                  </button>
                  <ol>{moves}</ol>
               </div>
            </div>
         </>
      );
   }
}

export default App;
