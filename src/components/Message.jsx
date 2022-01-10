import React from "react";

const Message = ({ winner, currentBoard }) => {
  const noMoreMoves = currentBoard.boardState.every((value) => value !== null);

  return (
    <h2>
      {winner && `The winner is ${winner}`}
      {!winner &&
        !noMoreMoves &&
        `The next player is ${currentBoard.isXnext ? "X" : "O"}`}
      {!winner && noMoreMoves && `It's a draw. Better luck next time.`}
    </h2>
  );
};

export default Message;
