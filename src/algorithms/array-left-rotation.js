function main() {
    const [n, d, a] = [5, 4, "1 2 3 4 5".split(" ").map(Number)];
    const alr = a.slice(d, d + (n - d)).concat(a.slice(0, d));
    console.log(alr.join(" "));
}

main();
