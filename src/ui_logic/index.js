const { isValidSudoku } = require('./sudokuValidator');

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
