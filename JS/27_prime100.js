function isPrime(num) {
    if (num <= 1)
		return false;
	
	for (let i = 2; i < num; i++)
		if (num % i == 0)
			return false;
	return true;
  }
  
  console.log(`Prime number between 0 and 100 are: \n`);
  let arr = new Array();
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
     arr.push(i);
    }
  }

  console.log(arr);
