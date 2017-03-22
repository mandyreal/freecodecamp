function makeFriendlyDates(arr) {
  var monthName = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
  var date1String = arr[0].split('-').join('');
  var date2String = arr[1].split('-').join('');
  var final = '';
  var year1  = date1String.substr(0,4);
  var month1 = date1String.substr(4,2);
  var day1   = date1String.substr(6,2);
  var year2  = date2String.substr(0,4);
  var month2 = date2String.substr(4,2);
  var day2   = date2String.substr(6,2);
  var date1  = new Date(Date.UTC(year1, parseInt(month1) - 1, day1));
  var date2  = new Date(Date.UTC(year2, parseInt(month2) - 1, day2));

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

  function monthDiff(d1, d2) {
    var month2 = d2.getUTCFullYear() * 12 + d2.getUTCMonth();
    var month1 = d1.getUTCFullYear() * 12 + d1.getUTCMonth();
    return month2 - month1;
  }

  function dayDiff(d1, d2) {
    if(d2.getUTCMonth() === d1.getUTCMonth()){
      return d1.getUTCDate() - d2.getUTCDate();
    }
    return 0;
  }

  console.log(date1);
  console.log(date2);

  // same month and year, diff date
  if (parseInt(year1) === parseInt(year2) && parseInt(month1) === parseInt(month2) && parseInt(day1) !== parseInt(day2)) {
    return final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1)), ending(parseInt(day2))];
  } 

  // same day
  if (parseInt(date2String) - parseInt(date1String) === 0) {
    return final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1)) + ', ' + year1];
  } 

  // more than a month of difference, but less than 12 months and different year
  if (monthDiff(date1, date2) < 12  && (parseInt(year1) !== parseInt(year2)))  {
    return final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1)), returnMonthName(parseInt(month2)) + ' ' + ending(parseInt(day2))];
  }

  if (monthDiff(date1, date2) <= 12 && dayDiff(date1, date2)>0) {
    return final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1))+', ' + parseInt(year1), returnMonthName(parseInt(month2)) + ' ' + ending(parseInt(day2))];
  }

  if (monthDiff(date1, date2) < 12 ) {
     return   final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1)) + ', ' + parseInt(year1), returnMonthName(parseInt(month2)) + ' ' + ending(parseInt(day2))];
  }

  final = [returnMonthName(parseInt(month1)) + ' ' + ending(parseInt(day1)) + ', ' + parseInt(year1), returnMonthName(parseInt(month2)) + ' ' + ending(parseInt(day2)) + ', ' + parseInt(year2)];
  console.log(final);
  return final;
}

console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"]));
//makeFriendlyDates(["2017-03-01", "2017-05-05"])
//makeFriendlyDates(["2016-12-01", "2018-02-03"])  // > 1 month diff and less than 12 months diff for same year
//makeFriendlyDates(["2016-12-01", "2017-02-03"])  // same month and year, diff date
//makeFriendlyDates(["2016-07-01", "2016-07-04"])  // same month and year, diff date
//makeFriendlyDates(["2018-01-13", "2018-01-13"])  // same day

