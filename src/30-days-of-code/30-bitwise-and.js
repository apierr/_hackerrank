// ### Task
// Given set S = {1, 2, 3, ..., N}. Find two integers, a and b (where a < b ), from set S such that the value of a & b is the maximum possible and also less than a given integer, k. In this case, & represents the bitwise AND operator.

let inputString = `3
5 2
8 5
2 2`;
let currentLine = 0;
inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(" ");

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);
        console.log(solution(n, k));
    }
}

function solution(n, k) {
    if (((k - 1) | k) > n) return k - 2;
    return k - 1;
}

main();
