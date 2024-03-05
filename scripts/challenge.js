const numbers = [2, 5, 8, 12, 15, 20, 17, 22, 25];

function findSumOfEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
function findAverageOfOdd(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
      count++;
    }
  }
  return count === 0 ? 0 : sum / count;
}
function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function findMin(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findSumOfEven(numbers));
console.log(findAverageOfOdd(numbers));
console.log(findMax(numbers));
console.log(findMin(numbers));
