exports.largestPrimeFactor = function(n) {
  var primeNumber = 2; // first prime number
  // do your work here

  while (n > 1) { // as long as n > 1 stays true, the code block will keep looping
    if (n % primeNumber === 0) { // if n is evenly divided by primeNumber
      n /= primeNumber; // divide n by primeNumber
    } else {
      primeNumber++; // else increase primeNumber by 1 & loop again until n is no longer greater than 1 (n = 1).
    }
  }
  return primeNumber;
};