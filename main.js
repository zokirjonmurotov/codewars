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

generateFibonacciNumbers();
// fi();
