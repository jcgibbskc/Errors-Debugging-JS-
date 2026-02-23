// STARTER CODE

function calculateTotal(numbers) {
 let total = 0;
 for (let i = 0; i < numbers.length; i++) { // BUG: <= causes undefined
   total += numbers[i];
 }
 return total;
}


function findMax(numbers) {
  let max = numbers[0]; // start by assuming the first number is the largest
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // update max if a bigger number is found
    }
  }
  return max;
}
const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

console.log(calculateTotal(data1));//6
console.log(calculateTotal(data2)); //15

console.log(findMax(data1)); //3
console.log(findMax(data2)); //6