// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let [bests, worsts] = [[scores[0]], [scores[0]]];

    scores.forEach(element => {
        if (element > bests.slice(-1)) bests.push(element);
        if (element < worsts.slice(-1)) worsts.push(element);
    });
    return [bests.length - 1, worsts.length - 1];
}

function main() {
    let scores = "3 4 21 36 10 28 35 5 24 42".split(" ").map(Number);
    console.log(breakingRecords(scores)); // -> 4 0
    scores = "10 5 20 20 4 5 2 25 1".split(" ").map(Number);
    console.log(breakingRecords(scores)); // -> 2 4
}

main();
