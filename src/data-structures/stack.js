// Stacks
// methods:push, pop, peek, length
const word = "racecar";
let reword = "";
let letters = []; // stack

word.split("").forEach(v => {
    letters.push(v); // pushing in the stack letters
});

while (letters.length > 0) reword += letters.pop(); // popping from the stack letters

console.log(
    reword === word ? `${word} is polindrome` : `${word} is not polindrome`
);

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
    push = value => {
        this.storage[this.count] = value;
        this.count++;
    };
    pop = () => {
        if (this.count === 0) return undefined;
        return this.storage[--this.count];
    };
    peek = () => this.storage[this.count - 1];
    length = () => this.count;
}

let stack = new Stack();
