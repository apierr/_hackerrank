// ### Task
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    return (max => ar.filter(e => e === max).length)(Math.max(...ar)); //Immediately Invoked Function Expressions (IIFE)
}

function main() {
    console.log(birthdayCakeCandles("3 2 1 3".split(" ").map(Number))); // -> 2
    console.log(birthdayCakeCandles("3 2 2 2".split(" ").map(Number))); // -> 1
}

main();
