import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import { calculateWinner } from "./helpers";
import Message from "./components/Message";

import "./styles/root.scss";

const App = () => {
  const NEW_GAME = [{ boardState: Array(9).fill(null), isXnext: true }];
  // history state keeper
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const currentBoard = history[currentMove];
  const { winner, winningCombination } = calculateWinner(
    currentBoard.boardState
  );
  console.log(history);

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

  const goToTurn = (position) => {
    setCurrentMove(position);
  };

  const startNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Message winner={winner} currentBoard={currentBoard} />
      <Board
        currentBoard={currentBoard.boardState}
        handleSquareClick={handleSquareClick}
        winningCombination={winningCombination}
      />
      <h4>
        <button
          type="button"
          onClick={() => {
            startNewGame();
          }}
        >
          START NEW GAME
        </button>
      </h4>
      <History
        history={history}
        goToTurn={goToTurn}
        currentMove={currentMove}
      />
    </div>
  );
};

export default App;
