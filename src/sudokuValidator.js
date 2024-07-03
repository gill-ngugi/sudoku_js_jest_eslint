const isValidSudoku = (board) => {
    const isValid = (nums) => {
      const set = new Set();
      for (let num of nums) {
        if (num < 1 || num > 9 || set.has(num)) {
          return false;
        }
        set.add(num);
      }
      return true;
    };
  
    for (let i = 0; i < 9; i++) {
      if (!isValid(board[i])) {
        return false;
      }
    }
  
    for (let i = 0; i < 9; i++) {
      const col = [];
      for (let j = 0; j < 9; j++) {
        col.push(board[j][i]);
      }
      if (!isValid(col)) {
        return false;
      }
    }
  
    const gridStarts = [0, 3, 6];
    for (let row of gridStarts) {
      for (let col of gridStarts) {
        const grid = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            grid.push(board[row + i][col + j]);
          }
        }
        if (!isValid(grid)) {
          return false;
        }
      }
    }
  
    return true;
  };
  
  module.exports = { isValidSudoku };

  // Run tests


  