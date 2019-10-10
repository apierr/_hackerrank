// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where s is the start point, and t is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.

// ........a.......s_________t.......b.......

// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right.

// Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // let [applesCount, orangesCount] = [0, 0];
    console.log(apples.filter(x => s <= x + a && x + a <= t).length);
    console.log(oranges.filter(x => b + x <= t && b + x >= s).length);
}

function main() {
    let [s, t, a, b] = [7, 11, 5, 15];
    let apples = [-2, 2, 1];
    let oranges = [5, -6];
    countApplesAndOranges(s, t, a, b, apples, oranges); // 1 1
    [s, t, a, b] = [2, 3, 1, 5];
    apples = [2];
    oranges = [-2];
    countApplesAndOranges(s, t, a, b, apples, oranges); // 1 1
}

main();
