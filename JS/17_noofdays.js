// Write a program which tells the number of days in a month.

function wanttoknw(month, year){
    return new Date(year, month, 0).getDate()
}

console.log(wanttoknw(2,20))
