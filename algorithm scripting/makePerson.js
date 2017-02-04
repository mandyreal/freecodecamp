
var Person = function(firstAndLast) {
  var fullName  = firstAndLast;
  var firstName = firstAndLast.split(" ")[0];
  var lastName  = firstAndLast.split(" ")[1];
  
  this.getFullName = function() {
    return fullName;
  };
  
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };  
  
  this.setFirstName = function(first) {
    fullName = first + " " + lastName;
  };

  this.setLastName = function(last) {
    fullName = firstName + " " + last;
  };

  this.setFullName = function(full) {
    fullName = full;
   };
  
};


var bob = new Person('Bob Ross');
bob.getFullName();

