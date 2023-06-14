let date = new Date;

console.log(Date())

let word = date.getFullYear()

console.log(word)


console.log(date.getMonth()) // months start from 0

console.log(date.getDate())

console.log(date.getDay())

console.log(date.getHours())

console.log(date.getMinutes())

console.log(" ")

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
//two ways
//1st
const then = Date.parse('01 Jan 1970 00:00:00 GMT');
const now = Date.parse('14 Mar 2023 00:00:00 GMT');
console.log(then)
console.log(now)

// 2nd
console.log(date.getTime())


