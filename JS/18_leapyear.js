// Write a program which tells the number of days in a month, now consider leap year.


function getDaysInMonth(month, year){
    if( month == 2 ){
        return (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0 ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
}

console.log(getDaysInMonth(2,2020))  

  