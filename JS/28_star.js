// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

let n = 3;
let space = "";

for (let i = 1; i <= n; i++){
    for (let j = 0; j < i; j++){
        space += "*";
    }
    space += "\n"
}
console.log(space)

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output

let n2 = 3;
let space2 = "";

for (let i = 1; i <= n2; i++){
    for (let j = 0; j < n2; j++){
        space2 += "*";
    }
    space2 += "\n"
}
console.log(space2)

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output

let n3 = 3;
let space3 = "";

for (let i = 1; i <= n3; i++){
    for (let j = 0; j < n3 - i; j++){
        space3 += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        space3 += "*";
    }
    space3 += "\n"
}
console.log(space3)