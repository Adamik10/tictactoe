import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";

import "./styles/root.scss";

const App = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);

  //this can be here and not in a state because it gets re-run on every update (click of the board)
  const winner = calculateWinner(boardState);

  const message = winner
    ? `The winner is ${winner}`
    : `The next player is ${isXnext ? "X" : "O"}`;

  const handleSquareClick = (position) => {
    if (winner) {
      return;
    }

    setBoardState((prev) => {
      return prev.map((square, pos) => {
        if (square) {
          return square;
        }

        if (pos === position) {
          if (isXnext === true) {
            setIsXnext(!isXnext);
            return "X";
          }
          setIsXnext(!isXnext);
          return "O";
        }

        return square;
      });
    });
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board boardState={boardState} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
