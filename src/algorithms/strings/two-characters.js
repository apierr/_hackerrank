function combinationOf2(str) {
    let arr = [...new Set(str.split(""))];

    return arr.reduce(
        (acc, v, i) => acc.concat(arr.slice(i + 1).map((w) => v + w)),
        []
    );

    return arr.flatMap((v, i) => arr.slice(i + 1).map((w) => v + w));
}

function areConsecutive(str) {
    return str.match(/(.)\1+/g);
}

function removeLetters(s, letters) {
    const reg = new RegExp("[^" + letters + "]", "g");
    return s.replace(reg, "");
}

function alternate(s) {
    const ss = combinationOf2(s)
        .map((o) => removeLetters(s, o))
        .filter((s) => !areConsecutive(s))
        .sort((a, b) => b.length - a.length);
    return ss.length === 0 ? 0 : ss[0].length;
}

console.log(alternate("a")); // 0
console.log(alternate("beabeefeab")); // 5
console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab")); // 8
console.log(alternate("asvkugfiugsalddlasguifgukvsa")); // 0
