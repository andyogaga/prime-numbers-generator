/**
 * Function to generate certain number of prime numbers
 *
 * @param {number} noOfPrimes - number of primes to generate
 * @param {array} [lastArr] - array of previously generated prime numbers
 *
 * For better preformance, to generate more prime numbers, the array of the previously generated
 * prime numbers so generation can continue from the last and not afresh from 2
 */

export const generatePrimeNumbers = (noOfPrimes = 10, lastArr = []) => {
  var arr = [2];
  if (lastArr && lastArr.length) {
    arr = lastArr;
  }
  if (lastArr && noOfPrimes < lastArr.length) {
    return lastArr.slice(0, noOfPrimes);
  }
  for (
    var i = arr.length === 1 ? 3 : arr[arr.length - 1] + 2;
    arr.length < noOfPrimes;
    i += 2
  ) {
    if (checkIfPrime(i, arr)) {
      arr.push(i);
    }
  }
  return arr;
};

/**
 *
 * @param {number} num - number to check if it's prime number
 * @param {*} arr - array of previously generated prime numbers below the number to be checked
 */

const checkIfPrime = (num, arr) => {
  if (!arr || !arr.length) {
    return false;
  }
  // use only previous values generated to test for prime (other values are negligible) => Better performance
  for (var i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      return false;
    }
    if (arr[i + 1] && Math.pow(arr[i + 1], 2) > num) {
      break;
    }
  }
  return true;
};

export const checkValueIsNumber = (value) => {
  return String(value).match(/^\d+$/) || value === "" ? true : false;
};
