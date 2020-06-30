function sockMerchant(ar) {
    let hMap = {};
    let pairs = 0;
    ar.forEach((v) => {
        if (typeof hMap[v] === "undefined") {
            hMap[v] = 1;
        } else if (hMap[v] === 0) {
            hMap[v]++;
        } else {
            pairs++;
            hMap[v] = 0;
        }
    });
    return pairs;

    let pairs = socks.reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {});
    return Object.keys(pairs).reduce((a, c) => a + parseInt(pairs[c] / 2), 0);
}

console.log(
    sockMerchant(["10", "20", "20", "10", "10", "30", "50", "10", "20"])
); // 3

console.log(sockMerchant("1 1 3 1 2 1 3 3 3 3".split(" "))); // 4

console.log(sockMerchant("4 5 5 5 6 6 4 1 4 4 3 6 6 3 6 1 4 5 5 5".split(" "))); // 9

arr = [1, 1, 2, 2, 2, 3];
arr.reduce((acc, key) => {
    acc[key] = 0;
    return (acc[key] || 0) + 1;
}, {});

arr.reduce(
    (acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] || 0) + 1,
    }),
    {}
);

students = [
    { name: "ant", age: 10 },
    { name: "fra", age: 11 },
];

students.reduce((a, c) => ({ ...a, [c.name]: c }), {});

students.filter((o) => o.name === "fra")[0];

students.reduce((a, c, i) => ({ ...a, [c.name]: c }), {});

socks = ["10", "20", "20", "10", "10", "30", "50", "10", "20"];
socks.reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {});

bar();
foo();
var foo = function () {
    console.log("foo");
};

function bar() {
    console.log("bar");
}
