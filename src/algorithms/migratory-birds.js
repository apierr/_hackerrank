// constraint It is guaranteed that each type is fron 1 to 5.
function migratoryBirds(arr) {
    let map = [0, 0, 0, 0, 0, 0];
    arr.forEach((e) => map[e]++);
    return map.indexOf(Math.max(...map));
}
