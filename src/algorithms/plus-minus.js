// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^(-4) are acceptable

// Complete the plusMinus function below.
function plusMinus(arr) {
    const total = arr.length;
    console.log((arr.filter(n => n > 0).length / total).toFixed(6));
    console.log((arr.filter(n => n < 0).length / total).toFixed(6));
    console.log((arr.filter(n => n === 0).length / total).toFixed(6));
}

function main() {
    const arr = [-4, 3, -9, 0, 4, 1];
    plusMinus(arr);
}

main();
