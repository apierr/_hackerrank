// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let results = Array(n + 1).fill(0);
    queries.forEach(items => {
        const [a, b, k] = [items[0], items[1], items[2]];
        results[a - 1] += k;
        results[b] -= k;
    });
    let max = 0;
    return results.reduce((a, c) => (max = a + c > max ? a + c : max));
}

function arrayManipulation2(n, queries) {
    // O(n*m)
    let numbers = [...Array(n).keys()].map(x => 0);
    queries.forEach(v => {
        for (let c = v[0] - 1; c < v[1]; c++) {
            numbers[c] += v[2];
        }
    });
    return Math.max(...numbers);
}

function main() {
    let n, queries;

    [n, queries] = [5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]];
    console.log(arrayManipulation(n, queries)); // -> 200
}

main();
