// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -Infinity;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const nums = [
                ...arr[i].slice(j, j + 3),
                arr[i + 1][j + 1],
                ...arr[i + 2].slice(j, j + 3)
            ];
            sum = nums.reduce((c, a) => c + a, 0);
            if (max < sum) max = sum;
        }
    }
    return max;
}

function main() {
    const arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    console.log(hourglassSum(arr)); // 19
}

main();
