/* 
    ### Task
    The probability that a machine produces a defective product is 1/3. 
    What is the probability that the  defect is found during the 1st inspection?
    // Reference: https://www.hackerrank.com/challenges/s10-binomial-distribution-2/problem
*/

function processData() {
    [x, n, p] = [1, 5, 1 / 3];
    console.log(negativeBinomialDistribution(x, n, p).toFixed(3));
}

const negativeBinomialDistribution = (x, n, p) =>
    combination(n - 1, x - 1) * p ** x * (1 - p) ** (n - x);

const combination = (n, x) => factorial(n) / (factorial(x) * factorial(n - x));

const factorial = (n, a = 1) => (n ? factorial(n - 1, a * n) : a);

processData();
