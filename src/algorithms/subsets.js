const getAllSubsets = (arr) =>
    arr.reduce( (a, c) => a.concat(a.map((e) => [c, ...e])), [[]] );

const arr = ["a", "b", "c"];
console.log(arr, getAllSubsets(arr));

const getAllCouples = (arr) => {
    arr.reduce((a,c,i) => a.concat(arr.slice(i+1).map(e => c + e)), [] )
};
