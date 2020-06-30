// Complete the birthday function below.
function birthday(s, d, m) {
    return s.filter(
        (e, i) =>
            s.slice(i, i + m).reduce((a, c) => a + c) == d && i + m <= s.length
    ).length;
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
    [s, d, m] = ["1 2 1 3 2 3".split(" ").map(Number), 3, 2];
    console.log(birthday(s, d, m)); // -> 2
}

var foo = (s, d, m) =>
    s.filter(
        (e, i) =>
            s.slice(i, i + m).reduce((a, c) => a + c) == d && i + m <= s.length
    ).length;

main();

var p1 = () => new Promise((res, rej) => setTimeout(() => res("p1"), 2000));
var p2 = () => new Promise((res, rej) => setTimeout(() => reject("p2"), 1000));
var p3 = () => new Promise((res, rej) => setTimeout(() => res("p3"), 4000));

Promise.all([p1(), p2(), p3()])
    .then((res) => console.log(res))
    .catch((res) => console.log(res));

var met = {
    greet: function name(params) {},
};
var Obj = function name(params) {};

obj = Object.create(met);
