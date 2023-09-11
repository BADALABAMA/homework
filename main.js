const matrix1 = [
  [2, 3, 4],

  [13, 12, 10],

  [11, 6, 7],
];

const matrix2 = [
  [12, 11, 14],

  [8, 22, 14],

  [6, 8, 7],
];

function solveMatrix(a, b) {
  const solvedMatrix = [];

  for (let i = 0; i < a.length; i++) {
    const row = [];
    for (let j = 0; j < a[i].length; j++) {
      row.push(a[i][j] + b[i][j]);
    }
    solvedMatrix.push(row);
    return solvedMatrix;
  }
}
const result = solveMatrix(matrix1, matrix2);
console.log(result);
