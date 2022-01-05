import React, { useState } from "react";
import Board from "./components/Board";

import "./styles/root.scss";

const App = () => {
  const [squareState, setSquareState] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);

  const handleSquareClick = (position) => {
    setSquareState((prev) => {
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
      <h2>message</h2>
      <Board squareState={squareState} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
