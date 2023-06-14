let date = new Date;

console.log(date.toDateString())

let year = date.getFullYear();
let month = date.getMonth()
let day = date.getDate()
let hours = date.getHours()
let min = date.getMinutes()

let readable1 = (`${year}-${month + 1}-${day} ${hours}:${min}`)   // +1 in month just because month starts from 0  
console.log(readable1)

let readable2 = (`${day}-${month + 1}-${year} ${hours}:${min}`)   // +1 in month just because month starts from 0
console.log(readable2)

let readable3 = (`${day}/${month + 1}/${year} ${hours}:${min}`)   // +1 in month just because month starts from 0
console.log(readable3)