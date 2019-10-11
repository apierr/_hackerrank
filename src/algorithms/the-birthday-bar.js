// Complete the birthday function below.
function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        const ss = s.slice(i, i + m);
        let sum = ss.reduce((a, c) => a + c, 0);
        if (sum === d) count++;
    }

    return count;
}

function main() {
    let [s, d, m] = ["1 1 1 1 1 1".split(" ").map(Number), 3, 2];
    console.log(birthday(s, d, m)); // -> 0
    [s, d, m] = ["1 2 1 3 2".split(" ").map(Number), 3, 2];
    console.log(birthday(s, d, m)); // -> 2
}

main();
