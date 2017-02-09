function makeFriendlyDates(arr) {
  var monthName = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
  var date1 = arr[0].split('-').join('');
  var date2 = arr[1].split('-').join('');
  var final = '';
  var year1  = date1.substr(0,4);
  var month1 = date1.substr(4,2);
  var day1   = date1.substr(6,2);
  var year2  = date2.substr(0,4);
  var month2 = date2.substr(4,2);
  var day2   = date2.substr(6,2);


  function returnMonthName(mon) {
  	return monthName[mon];
  };

  function ending(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return day + 'st';
      case 2:
      case 22:
        return day + 'nd';
      case 3:
      case 23:
        return day + 'rd';
      default:
        return day + 'th';
    }
  }

  // same day
  if (parseInt(date2) - parseInt(date1) === 0) {
  	final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1)) + ', ' + year1];
 	console.log(final);
  }	

  // same year and month, diff day
  if (parseInt(year1) === parseInt(year2) && parseInt(month1) === parseInt(month2) && parseInt(day1) !== parseInt(day2)) {
  	final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1)), ending(parseInt(day2))];
  	console.log(final);
  }

  return final;
}

  makeFriendlyDates(['2016-07-01', '2016-07-04']);
//makeFriendlyDates(["2022-09-05", "2023-09-05"])