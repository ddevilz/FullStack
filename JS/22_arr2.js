const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(ages.sort())

const Max = Math.min(...ages)
console.log(Max)
const Min = Math.max(...ages)
console.log(Min)

// Find the median age(one middle item or two middle items divided by two)

let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}
console.log(medianAge)


// Find the average age(all items divided by number of items)

let sum = ages.reduce((a, b) => a + b, 0)

const avgAge = () => {
    return sum / ages.length
}

console.log(avgAge())

// Find the range of the ages(max minus min)

const minAndMax = Max - Min 
console.log(minAndMax)

// Compare the value of (min - average) and (max - average), use abs() method

function difference(a, b) {
    return Math.abs(a - b);
}

console.log(difference(Min, avgAge()))