function rotate(alpha, k) {
    return alpha.slice(k, alpha.length) + alpha.slice(0, k) + "-";
}

function mapAlpha(e, k) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaRot = rotate(alpha, k % 26);
    if (alpha.indexOf(e.toLowerCase()) < 0) return e;
    return e.toLowerCase() === e
        ? alphaRot[alpha.indexOf(e)]
        : alphaRot[alpha.indexOf(e.toLowerCase())].toUpperCase();
}

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    return s
        .split("")
        .map((e) => mapAlpha(e, k))
        .join("");
}

console.log(caesarCipher("middle-Outz!", 2)); //okffng-Qwvb!
