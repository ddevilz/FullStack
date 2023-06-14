// Write a program to check that the number given by the user is a prime number or not.

function isPrime(num) {
	if (num <= 1)
		return false;
	
	for (let i = 2; i < num; i++)
		if (num % i == 0)
			return false;
	return true;
}

isPrime(9) ? console.log("Prime") : console.log("Not prime");