// Check if second argument is truthy on all elements of a collection


function truthCheck(collection, pre) {
  // Is everyone being true?  
  temp = false;

  for (var name in collection)  {
    console.log(collection[name][pre]);
    if (collection[name].hasOwnProperty(pre) && Boolean(collection[name][pre])) {
          temp = true;
        } else {
          temp = false;
          break;
        }
  }
  return temp;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// returns true
