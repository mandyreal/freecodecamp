var temp = '';

$(document).ready(function(){

    $('#numbers > a').not('#clear,#clearall').click(function(){
        var input = $(this).text();
        var display = $('#total').text();

        console.log('number pressed: ' + input);

        if(!isNaN(input) || input === '.') {
            temp += input;
            console.log('temp is: ' + temp);
                $('#total').text(temp.substring(0,10));

        }
    });
});
