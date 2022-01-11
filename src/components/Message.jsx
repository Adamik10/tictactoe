import React from "react";

const Message = ({ winner, currentBoard, noMoreMoves }) => {
  return (
    <div className="status-message">
      {winner && (
        <>
          The winner is{" "}
          <span className={`${winner === "X" ? "text-green" : "text-yellow"}`}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoreMoves && (
        <>
          The next player is{" "}
          <span className={`${winner === "X" ? "text-green" : "text-yellow"}`}>
            {currentBoard.isXnext ? "X" : "O"}
          </span>
        </>
      )}

      {!winner && noMoreMoves && `It's a draw. Better luck next time.`}
    </div>
  );
};

export default Message;
