//update arr1 with items in arr2. if item does not exist, add as new array element

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var index; 

    var getIndex = function(item) {
        for (var i=0; i < this.length; i++) {
            if (this[i][1] === item) {
                return i;
            } 
        }
        return undefined;
    };

    for (var j=0; j < arr2.length; j++ ) {
        index = getIndex.call(arr1, arr2[j][1]);
        console.log("index for " + arr2[j][1] + " is " + index);
        if (index === undefined) {
            arr1.push(arr2[j]);
        } else {
            arr1[index][0] = arr1[index][0] + arr2[j][0];
        }
    };
    console.log("Before sort : " + arr1);

    arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    console.log("Afert sort : " + arr1);
    return arr1;

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
