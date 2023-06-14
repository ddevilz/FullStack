function sum(arr){
    let sum = 0;
    for (let num of arr){
        sum = sum + num; 
    }
    return sum;
}
let sumarr = [1,2,3,4,5]
let arrr = sum(sumarr);
console.log(arrr)