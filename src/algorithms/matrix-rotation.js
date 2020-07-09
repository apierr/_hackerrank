function matrixRotation(matrix, r) {
    const colsCount = matrix[0].length;
    const rowsCount = matrix.length;
    const layersCount = Math.min(colsCount, rowsCount) / 2;
    console.log(layersCount);
    let layers = [];
    return matrix.map((es, ci) => es.map((e, cj) => e));
}

/*
Find the number of negative integers in row-wise/column-wise sorted matrix
 */
function negativeCount(matrix) {
    /* naive solution O(n * m) */
    return matrix.flat().filter((e) => e < 0).length;

    /* time complexity O(n+m) */
    const cols = matrix[0].length;
    const rows = matrix.length;
    // console.log(cols, rows);
    let negCount = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = cols - 1; c > -1; c--) {
            if (matrix[r][c] < 0) {
                negCount += c + 1;
                c = cols - 1;
                r++;
            }
        }
    }
    return negCount;
}
let matrix;
// matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];
// matrixRotation(matrix, 1);

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// console.log(matrixRotation(matrix, 1));

matrix = [
    [-3, -2, -1, 1],
    [-1, -2, 3, 4],
    [7, 8, 9, 10],
];
console.log(negativeCount(matrix)); // 5
