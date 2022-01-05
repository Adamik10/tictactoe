import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
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

  const renderSquare = (position) => {
    return (
      <Square
        value={squareState[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
