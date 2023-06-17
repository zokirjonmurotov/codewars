// Product of Largest Pair(7kyu)

function maxProduct(a) {
  let max1 = a[0],
    max2 = a[1];
  for (let i = 2; i <= a.length; i++) {
    if (a[i] > max1) {
      if (max1 > max2) max2 = max1;
      max1 = a[i];
    } else if (a[i] > max2) max2 = a[i];
  }
  return max2 * max1;
}

//   =======================

// Testing 1-2-3(7kyu)

function number(array) {
  return array.map((item, index) => `${index + 1}: ${item}`);
}

//

function generateFibonacciNumbers() {
  let a = 0;
  let b = 1;

  while (a <= 100) {
    console.log(a);
    const temp = a + b;
    a = b;
    b = temp;
  }
}

// generateFibonacciNumbers();
// fi();

//Consonant value(6kyu)
function solve(s) {
  let alb = "abcdefghijklmnopqrstuvwxyz";
  let unli = "aeiou";
  let arr = [];
  let sum = 0;
  for (let i in s) {
    if (!unli.includes(s[i])) {
      sum += alb.indexOf(s[i]) + 1;
    } else {
      arr.push(sum);
      sum = 0;
    }
  }
  if (sum !== 0) arr.push(sum);
  return Math.max(...arr);
}

// All Star Code Challenge #15 (6kyu)
function rotate(str) {
  if (!str.length) return [];
  let arr = [];
  for (let i = 1; i < str.length; i++) arr.push(str.slice(i) + str.slice(0, i));
  arr.push(str);
  return arr;
}

console.log(rotate("Hello"));
