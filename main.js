// Product of Largest Pair(7kyu)


function maxProduct(a){
    let max1 = a[0], max2 = a[1];
    for(let i = 2; i <= a.length; i++){
      if (a[i] > max1){
        if(max1 > max2) max2 = max1;
        max1 = a[i];
      }
      else if (a[i] > max2)max2 = a[i];
    }
  return max2 * max1;
  }

//   =======================