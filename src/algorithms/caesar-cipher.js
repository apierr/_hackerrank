function rotate(alpha, k) {
    return alpha.slice(k, alpha.length) + alpha.slice(0, k) + "-";
}

function cipher(e) {
    const index = this.alpha.indexOf(e.toLowerCase());
    if (index < 0) return e;
    return e.toLowerCase() === e
        ? this.alphaRot[index]
        : this.alphaRot[index].toUpperCase();
}

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    this.alpha = "abcdefghijklmnopqrstuvwxyz";
    this.alphaRot = rotate(alpha, k % 26);
    cipher.bind(this);
    return s.split("").map(cipher).join("");
}
console.assert(caesarCipher("middle-Outz!", 2) === "okffng-Qwvb!");
