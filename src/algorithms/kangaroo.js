// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Constraints: 0 <= x1 <= x2  <= 10000

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    //  x1 + y * v1 = x2 + y * v2 where "y" is number of jumps.
    // x1 - x2 = y * (v2-v1)
    return v2 > v1 ? "NO" : (x1 - x2) % (v2 - v1) == 0 ? "YES" : "NO";
}

function main() {
    console.log(kangaroo(0, 3, 4, 2)); // -> YES
    console.log(kangaroo(0, 2, 5, 3)); // -> NO
    console.log(kangaroo(2081, 8403, 9107, 8400)); // -> YES
}

main();
