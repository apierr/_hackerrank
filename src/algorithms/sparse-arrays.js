// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings.

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    return queries.map(q => strings.filter(s => s === q).length);
}

function main() {
    let strings, queries;

    strings = ["aba", "baba", "aba", "xzxb"];
    queries = ["aba", "xzxb", "ab"];
    console.log(matchingStrings(strings, queries)); // ->[2, 1, 0]

    strings = ["ab", "ab", "abc"];
    queries = ["ab", "abc", "bc"];
    console.log(matchingStrings(strings, queries)); // -> [2, 1, 0]
}

main();
