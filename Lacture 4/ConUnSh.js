// Concat( ) : joins multiple arrays & returns result
// let marvelHeroes = ["Iron Man", "Thor", "Hulk", "Captain America", "Spider-Man"];
// let dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

//  let indianHeroes = [
//   "Shaktimaan",
//   "Krish",
//   "Chulbul Pandey",
//   "Singham",
//   "Baahubali",
//   "RRR Ram",
//   "RRR Bheem",
//   "Agent Vinod",
//   "Kabir (War)",
//   "Pathaan"
// ];
// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);






// Unshift( ) : add to start
let foods = [
  "Pizza",
  "Burger",
  "Biryani",
  "Paneer Butter Masala",
  "Masala Dosa",
  "Pav Bhaji",
  "Chole Bhature",
  "Samosa",
  "Vada Pav",
 
];

foods.unshift( "Ice Cream");
console.log(foods);

// shift( ) : delete from start & return ye bi array method he html ke liye likh do
let fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Papaya",
  "Watermelon",
  "Strawberry",
  "Guava"
];
console.log(fruits)
let val = fruits.shift();
console.log("Deleted =",val);