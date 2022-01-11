import React from "react";

const Square = ({ value, position, onClick, winningCombination }) => {
  const isWinningSquare = (thisSquare) => {
    return winningCombination.includes(thisSquare);
  };

  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare(position) ? "bold" : "normal" }}
    >
      {value}
    </button>
  );
};

export default Square;
