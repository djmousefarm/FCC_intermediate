

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  newArr.sort();
  
  newArr = newArr.filter(function(e,i,a) {return e!==a[i+1] && a[i-1]!==e;});
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
