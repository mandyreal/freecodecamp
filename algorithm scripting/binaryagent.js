//Return an English translated sentence of the passed binary string

function binaryAgent(str) {
  str = str.split(" ");
  	var temp = [];
    var newStr = "";

    for (var i=0; i < str.length; i++) {
      digit = parseInt(str[i], 2);
      temp.push(digit);
    }

  	for (var i=0; i < temp.length; i++) {
      newStr = newStr + String.fromCharCode(temp[i]);
  	}
//  console.log("Phrase is : " + newStr);
    return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// returns Aren't bonfires fun!?
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
// returns I love FreeCodeCamp!
