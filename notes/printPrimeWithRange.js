function printPrimeWithRange(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i)
    }
  }
}

function isPrime(number) {
  let isPrime = true
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false
      break
    }
  }
  return isPrime
}

printPrimeWithRange(50)
