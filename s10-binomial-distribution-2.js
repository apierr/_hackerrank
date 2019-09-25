/*
    ## Task
    A manufacturer of metal pistons finds that, on average, 12% of the pistons they manufacture are rejected because they are incorrectly sized. What is the probability that a batch of 10 pistons will contain:
    No more than 2 rejects?
    At least 2 rejects?
    Reference: https://www.hackerrank.com/challenges/s10-binomial-distribution-2/problem
*/

const processData = input => {
    [badPistons, n] = input.split(" ").map(Number);
    [p, r] = [badPistons / 100, 2];
    console.log(cumulativeProbability(n - r, n, 1 - p).toFixed(3));
    console.log(cumulativeProbability(r, n, p).toFixed(3));
};

const cumulativeProbability = (x, n, p, cp = 0) =>
    x > n
        ? cp
        : cumulativeProbability(
              x + 1,
              n,
              p,
              cp + binomialDistribution(x, n, p)
          );

const binomialDistribution = (x, n, p) =>
    combination(n, x) * p ** x * (1 - p) ** (n - x);

const combination = (n, x) => factorial(n) / (factorial(x) * factorial(n - x));

const factorial = (n, a = 1) => (n ? factorial(n - 1, a * n) : a);

processData("12 10");
