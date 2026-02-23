// STARTER CODE

function calculateTotal(numbers) {
 let total = 0;
 for (let i = 0; i < numbers.length; i++) { // BUG: <= causes undefined
   total += numbers[i];
 }
 return total;
}

const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

console.log(calculateTotal(data1));
console.log(calculateTotal(data2));
