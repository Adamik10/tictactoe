import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";

import "./styles/root.scss";

const App = () => {
  // history state keeper
  const [history, setHistory] = useState([
    { boardState: Array(9).fill(null), isXnext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentBoard = history[currentMove];
  const winner = calculateWinner(currentBoard.boardState);
  const message = winner
    ? `The winner is ${winner}`
    : `The next player is ${currentBoard.isXnext ? "X" : "O"}`;

  // handleSquareClick is pasted into the Board component and used there
  const handleSquareClick = (position) => {
    if (currentBoard.boardState[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const lastMove = prev[prev.length - 1];
      const newBoardState = lastMove.boardState.map((squareValue, index) => {
        if (index === position) {
          return lastMove.isXnext ? "X" : "O";
        }
        return squareValue;
      });
      return prev.concat({
        boardState: newBoardState,
        isXnext: !lastMove.isXnext,
      });
    });
    setCurrentMove((previousMove) => {
      return previousMove + 1;
    });
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board
        currentBoard={currentBoard.boardState}
        handleSquareClick={handleSquareClick}
      />
    </div>
  );
};

export default App;
