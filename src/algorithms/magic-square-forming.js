// We define a magic square to be an  matrix of distinct positive integers from 1 to n^2 where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

// You will be given a 3x3 matrix of integers in the inclusive range [1,9]. We can convert any digit a to any other digit b in the range [1,9] at cost of |a - b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

// Complete the formingMagicSquare function below.

var magicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
];

function formingMagicSquare(s) {
    let totals = [];
    const square = s.flat();
    magicSquares.forEach(magicSquare => {
        let total = 0;
        magicSquare.flat().forEach((magicNumber, i) => {
            total += Math.abs(magicNumber - square[i]);
        });
        totals.push(total);
    });
    return Math.min(...totals);
}

function main() {
    input1 = [[4, 8, 2], [4, 5, 7], [6, 1, 6]];
    console.log(formingMagicSquare(input1)); // -> 4
    input2 = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
    console.log(formingMagicSquare(input2)); // -> 1
}
main();
