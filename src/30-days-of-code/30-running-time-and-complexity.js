function processData(input) {
    const numbers = input.split("\n").map(Number);
    numbers.shift();

    numbers.forEach(element => {
        console.log(isPrime(element) ? "Prime" : "Not Prime");
    });
}

function isPrime(num) {
    if (num === 1) return false;
    for (i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function main() {
    const input = `2
    31
    33`;
    processData(input);
}

main();
