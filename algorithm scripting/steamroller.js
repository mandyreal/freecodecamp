
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var temp = [];

  function flatten(arr) {
    for (var i=0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        temp.push(arr[i]);
      }
    }
  }

  flatten(arr);
  console.log("Flattened array is : " + temp);
  return temp;
}


steamrollArray([0,[1,2,[]],[3,4]]);
// returns [0,1,2,3,4]
