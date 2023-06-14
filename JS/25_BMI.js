function BMI(weight, height){
    let bmi = weight / (height*height)
    console.log(bmi)
    if(bmi <= 18.5){
        return 'Underweight: BMI is less than 18.5';
    } 
    if(bmi >= 18.5 && bmi <= 24.9){
        return 'Normal weight: BMI is 18.5 to 24.9';
    }
    if(bmi >= 25 && bmi <= 29.9){
        return 'Overweight: BMI is 25 to 29.9';
    }
    else {
        return 'Obese: BMI is 30 or more';
    }
}
console.log(BMI(70,2)) 