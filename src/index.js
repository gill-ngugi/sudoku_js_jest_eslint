const { isValidSudoku } = require('./sudokuValidator');

const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(isValidSudoku(board));


// Function to create the Sudoku grid UI
const createSudokuGrid = () => {
  const grid = document.getElementById('sudokuGrid');
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div');
      cell.className = 'sudoku-cell';
      const input = document.createElement('input');
      input.type = 'number';
      input.min = 1;
      input.max = 9;
      cell.appendChild(input);
      grid.appendChild(cell);
    }
  }
};

// Function to read values from the Sudoku grid
const getSudokuBoard = () => {
  const grid = document.getElementById('sudokuGrid');
  const inputs = grid.getElementsByTagName('input');
  const board = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const value = inputs[i * 9 + j].value;
      row.push(value ? parseInt(value, 10) : 0);
    }
    board.push(row);
  }
  return board;
};

// Function to display the result
const displayResult = (isValid) => {
  const resultDiv = document.getElementById('result');
  if (isValid) {
    resultDiv.textContent = 'The Sudoku puzzle is valid!';
    resultDiv.style.color = 'green';
  } else {
    resultDiv.textContent = 'The Sudoku puzzle is invalid!';
    resultDiv.style.color = 'red';
  }
};

// Event listener for the Validate button
document.getElementById('validateButton').addEventListener('click', () => {
  const board = getSudokuBoard();
  const isValid = isValidSudoku(board);
  displayResult(isValid);
});

// Create the Sudoku grid when the page loads
createSudokuGrid();
