import React from "react";

const History = ({ history, goToTurn, currentMove }) => {
  return (
    <ul>
      {history.map((value, index) => {
        return (
          <li key={index}>
            <button
              style={{
                fontWeight: currentMove === index ? "bold" : "normal",
              }}
              type="button"
              onClick={() => {
                goToTurn(index);
              }}
            >
              {index < 1 ? `Game start` : `Turn ${index}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
