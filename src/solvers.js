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
  // mathmatical solution
    // var array = [];
    // for (var i = 1; i <= n; i++) {
    //   array.push(i);
    // }
    // return _.reduce(array, function(acc, solutions) {
    //   acc = acc * solutions;
    //   return acc;
    // })

  // recursion "solution
  var solutionBoard = new Board({n: n});
  var solutionCount = 0;


  var findSolution = function(potentialSolution, column, row) {
    row = row || 0;
    potentialSolution.togglePiece(0, column);
    if (n >= 2) {
      row = 1;
    }   
    //loop through from 0 to n-1
    for(var columnCount = 0; columnCount < n; columnCount++){
      //toggle current position
      if (row !== 0 && columnCount !== column) {
        potentialSolution.togglePiece(row, columnCount);
      }
      //check for conlifcts and if none 
      if(!potentialSolution.hasAnyRooksConflicts()){
        // if rooks === n (by reducing .rows()
        if(_.reduce(_.flatten(solutionBoard.rows()), function(a,b) { return a + b }) === n){
          //increase solutionCount
          solutionCount++;
          console.dir(potentialSolution + ' for n = ' + n)
          //if in last row but not last column
          if(columnCount < n){
            //toggle current poistion back to zero(end of current loop)
            potentialSolution.togglePiece(row, columnCount);
          }
        // else if there are not enough rooks to make a solution
        } else {
          // if it is not in the last row
          if (row < n) {
            // increase the row
            var nextRow = row + 1;
            //run the finder function with updated row 
            findSolution(potentialSolution, column, nextRow);
          // else there are no conflicts, there are not enough rook, it is in the final row
          } else {
            // if it is not in the final column
            if (columnCount < n) {
              // toggle
              potentialSolution.togglePiece(row, columnCount);      
            // else
            } else {
              // break
              break;
            }
          }
        }
        //if there are conflicts: toggle position back, end of loop
      } else {
        // if in the last columnCount, but not the last row
          // toggle
          // increase row by 1
          // run findSolution
        // else 
        potentialSolution.togglePiece(row, columnCount);
      }
    }
  }

  for (var columns = 0; columns < n; columns++) {
    findSolution(solutionBoard, columns);
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
