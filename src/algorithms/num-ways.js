function fibonacci(n) {
    if (n < 2) return n;
    let [tmp, prev, curr] = [0, 0, 1];
    for (let c = 2; c < n; c++) {
        tmp = prev + curr;
        prev = curr;
        curr = tmp;
    }
    return prev + curr;
}

testSet = { 0: 0, 1: 1, 2: 1, 3: 2, 4: 3, 5: 5, 6: 8, 13: 233 };
Object.keys(testSet).forEach((e) => {
    console.assert(
        fibonacci(Number(e)) === testSet[e],
        `${e} -> ${fibonacci(e)} instead of ${testSet[e]}`
    );
});
