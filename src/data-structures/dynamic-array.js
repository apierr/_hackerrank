// https://www.hackerrank.com/challenges/dynamic-array/problem

function dynamicArray(n, queries) {
    let lastAns = 0;
    let seqList = Array(n).fill(null);
    let results = [];

    // console.log(queries, seqList);
    queries.forEach(v => {
        const [type, x, y] = v;
        const index = (x ^ lastAns) % n;
        if (type === 1) {
            if (seqList[index] === null) {
                let myList = [];
                myList.push(y);
                seqList[index] = myList;
            } else {
                seqList[index].push(y);
            }
        } else {
            lastAns = seqList[index][y % seqList[index].length];
            results.push(lastAns);
        }
    });
    return results;
}

function main() {
    const n = 2;
    input = `1 0 5
1 1 7
1 0 3
2 1 0
2 1 1`;
    queries = input.split("\n").map(v => v.split(" ").map(Number));
    console.log(dynamicArray(2, queries).join("\n") + "\n");
}

main();
