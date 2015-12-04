/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  for(var i = 0; i < n; i++){
    solution.togglePiece(i,i);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // recursion "solution
  var solutionBoard = new Board({n: n});
  var solutionCount = 0;
  var findSolution = function(board, row) {
    var boardRow = board.rows()[row];
    for (var i = 0; i < boardRow.length; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyColConflicts()) {
        if (row < (n - 1)) {
          findSolution(board, row + 1);
        } else {
          solutionCount++;
        }
      } 
      board.togglePiece(row, i);
    }
  };
  findSolution(solutionBoard, 0);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionBoard = new Board({n: n});
  var solutionCount = 0;
  var findSolution = function(board, row) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueenConflictsOn(row, i)) {
        if (row < (n - 1)) {
          findSolution(board, row + 1);
        } else {
          solutionCount++;
        }
      } 
      if (solutionCount !== 0) {
        return board.rows();
      } else {
        board.togglePiece(row, i);
      }
    }
    return board.rows();
  };
  return findSolution(solutionBoard, 0);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if(n === 0){return 1};
  var solutionBoard = new Board({n: n});
  var solutionCount = 0;
  var findSolution = function(board, row) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueenConflictsOn(row, i)) {
        if (row < (n - 1)) {
          findSolution(board, row + 1);
        } else {
          solutionCount++;
        }
      } 
      board.togglePiece(row, i);
    }
  };
  findSolution(solutionBoard, 0);
  return solutionCount;
};
