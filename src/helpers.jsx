// this function calculates whether the current state of the board has a winner
function calculateWinner(boardState) {
  console.log(`this is from helpers: ${boardState}`);

  const winningSolutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // example of a boardState array
  // [x, null, o, x, o, o, x, null, null]

  for (let i = 0; i < winningSolutions.length; i++) {
    const [a, b, c] = winningSolutions[i];

    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[b] === boardState[c]
    ) {
      return boardState[a];
    }
  }
}

export { calculateWinner };
