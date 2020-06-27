// Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.
// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    // const couples = ar.map((v, i) => ar.slice(i + 1).map(w => [v, w])).flat();
    const couples = [];
    for (let i = 0; i < n; i++) {
        ar.slice(i + 1).forEach(w => {
            couples.push([ar[i], w]);
        });
    }
    return couples.filter(v => (v[0] + v[1]) % k === 0).length;
}

function main() {
    console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // -> 5
}

main();
