// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// 1) The elements of the first array are all factors of the integer being considered
// 2) The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    const [max_a, min_b] = [Math.max(...a), Math.min(...b)];
    const integers = Array(min_b - max_a).from(
        { length: min_b - max_a + 1 },
        (_, id) => id + max_a
    );
    return integers.filter(
        v => a.every(num => v % num === 0) && b.every(num => num % v === 0)
    ).length;

    let validCount = 0;

    for (let x = Math.max(...a); x <= Math.min(...b); x++) {
        if (a.every(num => x % num === 0)) {
            if (b.every(num => num % x === 0)) {
                validCount += 1;
            }
        }
    }

    return validCount;
}

function main() {
    const a = [2, 4];
    const b = [16, 32, 96];
    console.log(getTotalX(a, b)); // -> 3
}
main();
