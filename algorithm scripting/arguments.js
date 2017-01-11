// Create a function that sums 2 arguments together. If only one argument is provided, 
// then return a function that expects one argument and returns the sum


function addTogether() {
  if (arguments.length === 1 && typeof arguments[0] === "number") {
    var x = arguments[0];
    return function() {
      if (typeof arguments[0] === "number") {
        return arguments[0] + x;
      }
    }
  } else if (arguments.length === 2) {
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
      return undefined
    } else {
        return arguments[0] + arguments [1];
    }
  }
};

addTogether("http://");
// returns undefined
