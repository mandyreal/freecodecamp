// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

function pairwise(arr, arg) {
  var temp = arr.slice();
  var total = 0;
  
  console.log(temp);
  for (var i=0; i < temp.length; i++) {
    for (var j = i + 1; j < temp.length; j ++) {
      if (temp[i] + temp[j] == arg) {
        total += i + j;
        temp[i] = NaN;
        temp[j] = NaN;
      }
    }  
  }
  return total;
}

pairwise([1,4,2,3,0,5], 7);

