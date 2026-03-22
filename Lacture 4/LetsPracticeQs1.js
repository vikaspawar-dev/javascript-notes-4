//sum = 85 + 97 + 44 +37 + 76 + 60
// Total = 399 399 ÷ 6 = 66.5
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] + marks[6] its normal life

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }
// console.log(sum);
// total 399

//Qs.1 Ans 
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log( `Avg marks of the class = ${avg}`);

// Qs.2 Ans 
// 10% OFF ke baad:
// 250 → 225
// 645 → 580.5
// 300 → 270
// 900 → 810
// 50 → 45

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//     // console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value aftr offer = ${items[i]}`)
//     i++;
// }

// Using for loop simple way
let items = [250, 645, 300, 900, 50];
for(let i = 0; i < items.length; i++){
    let offer = items [i] / 10;
    items [i]-= offer;
}
console.log(items);