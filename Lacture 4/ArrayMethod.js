// Array Methods

// Push( ) : add to end
let foods = ["Pizza", "Burger", "Pasta", "Biryani", "Sandwich"];
foods.push("Dal", "Roti", "Paneer", );

console.log(foods);


// Pop( ) : delete from end & return
// let indianFoods = ["Dal", "Roti", "Paneer", "Biryani", "Samosa"];
// console.log(indianFoods);
// indianFoods.pop();
// console.log(indianFoods);

let indianFoods = ["Dal", "Roti", "Paneer", "Biryani", "Samosa"];
console.log(indianFoods);
let deletedItem = indianFoods.pop();
console.log(indianFoods);
console.log("Deleted Foods = ", deletedItem);

// toString( ) : converts array to string
let sabji = ["Aloo", "Tamatar", "Pyaz", "Baingan", "Bhindi"];
console.log(sabji);
console.log(sabji.toString());

let  marks = [89,67,47,93,70];
console.log(marks);
console.log(marks.toString());