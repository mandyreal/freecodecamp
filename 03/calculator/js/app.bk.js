	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var fullInput = "";
    var totaldiv = $("#total");
    var inputIsNumber = false;
    totaldiv.text("0");
    
    $('#numbers > a').not('#clear,#clearall').click(function(){
        number += $(this).html();
        inputIsNumber = true;
        fullInput = number;
        totaldiv.text(number);
        testNumLength(number);
    });

    $('#operators > a').not('#equals').click(function(){
        operator = $(this).text();
        if (inputIsNumber) {
            fullInput += operator;
            inputIsNumber = false;
        }
        newnumber = number;        
        number = "";
        totaldiv.text($(this).text());
        console.log("Input : " + fullInput);
    });

    $('#clear,#clearall').click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });

    $('#equals').click(function(){
        if (operator == "+") {
            number = (parseInt(number, 10) + parseInt(newnumber, 10)).toString();
            totaldiv.text(number)
            newnumber = number;
        } else if (operator == "-") {
            number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString();
            totaldiv.text(number)
            newnumber = number;
        } else if (operator == "*") {
            number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString();
            totaldiv.text(number)
            newnumber = number;
        } else if (operator == "/") {
            console.log("division.." + newnumber + "/" + number)
            number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString();
            totaldiv.text(number);
            newnumber = number;
        }
        testNumLength(number);
    });
