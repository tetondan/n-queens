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

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // create a new Board(n)
  var solutionBoard = new Board({n: n});
  var solutionCount = 0;

  var findSolution = function(potentialSolution, startColumn, row) {
    row = row || 0;
    // switch at the starting column
    potentialSolution.togglePiece(row, startColumn);

    // if there there is a conflict
    if (potentialSolution.hasAnyRooksConflicts()) {
      potentialSolution.togglePiece(row, startColumn);
      // findSolution(potentialSolution, startColumn++ , row);
    } else if (row === (n - 1)){
      return solutionCount++; //increment solution count and continue with loop
    } else {
      for (var i = 0; i < n; i++) {
        findSolution(potentialSolution, i, row + 1);
      }
    }
  };

  for (var x = 0; x < n; x++) {
    findSolution(solutionBoard, x);
  }

  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
