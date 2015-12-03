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
  // var solutionsCount = 0;
  var comboArray = []
  var onlyOptions = [];
  for(var i = 0; i < n; i++){
    comboArray.push(0);
  }
  for (var j = 0; j < comboArray.length; j++) {
    var possible = comboArray.slice(0);
    possible[j] = 1;
    onlyOptions.push(possible);
  }

  var findSolutions = function(nLeft, solutionSoFar, solutionsCount) {
    solutionsCount = solutionsCount || {count: 0};
    if (nLeft === 0) {
      var testBoard = new Board(solutionSoFar);
      if (!testBoard.hasAnyRooksConflicts()) {
        console.log('Found One')
        solutionsCount.count++;
      }
      return solutionsCount.count;
    }
    nLeft--;

    for (var i = 0; i < onlyOptions.length; i++) {
      var currentRow = [onlyOptions[i]];
      solutionsCount.count = findSolutions(nLeft, solutionSoFar.concat(currentRow), solutionsCount);
    }
    return solutionsCount.count;
  }
  // console.log('Number of solutions for ' + n + ' rooks:', solutionsCount);
  return findSolutions(n, []);
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
