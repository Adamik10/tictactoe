import React from "react";

const History = ({ history, goToTurn, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((value, index) => {
          return (
            <li key={index}>
              <button
                // style={{
                //   fontWeight: currentMove === index ? "bold" : "normal",
                // }}
                className={`btn-move ${currentMove === index ? "active" : ""}`}
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
    </div>
  );
};

export default History;
