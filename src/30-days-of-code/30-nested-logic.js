function processData(input) {
    //Enter your code here
    const [s1, s2] = input.replace(/^\s+/gm, "").split("\n");
    const [es, as] = [s1.split(/\s+/).map(Number), s2.split(/\s+/).map(Number)];
    fees = [15, 500, 10000];
    const deltas = es.map((v, i) => (v - as[i]) * fees[i]);
    console.log(get_fee(deltas));
}

function get_fee(deltas) {
    if (deltas.reduce((c, a) => c + a, 0) < 0) return 0;
    return Math.max(...deltas) > 10000 ? 10000 : Math.max(...deltas);
}

function main() {
    input = `9 6 2015
    6 6 2015`;
    processData(input); // 45
    input2 = `31 8 2004
    20 1 2004`;
    processData(input2); // 3500
    input3 = `24 8 2004
    22 9 2004`;
    processData(input3); // 3500
    input4 = `8 4 12
    1 1 1`;
    processData(input4); // 10000
}

main();
