function calculateTotal(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max; // FIXED: moved inside the closing brace
}

const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

console.log(calculateTotal(data1)); // 6
console.log(calculateTotal(data2)); // 15

console.log(findMax(data1)); // 3
console.log(findMax(data2)); // 6