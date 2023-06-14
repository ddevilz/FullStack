const countries = ['India','USA','UK','China', 'Japan','Australia'];

function ArrC(word){
    for (let i of countries){
     if(word == i){
        console.log(word)
     } else{
        countries.push('Ethiopia')
        break;
     } 
    }
}
ArrC('Ethiopia')
console.log(countries)
