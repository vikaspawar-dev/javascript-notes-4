let marvelHeroes = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Spider-Man",
    "Black Panther",
    "Doctor Strange",
    "Scarlet Witch",
    "Ant-Man",
    "Captain Marvel"
];

console.log(marvelHeroes);

console.log(marvelHeroes.slice(1, 3));

let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);

// Add Element
// arr.splice(2,0,101);
// console.log(arr);

// Deleted Item
// arr.splice(3,1);
// console.log(arr);

// Replace Element
arr.splice(3, 1, 102);
console.log(arr);
