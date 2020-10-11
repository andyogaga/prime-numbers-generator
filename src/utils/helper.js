/**
 * Function to generate certain number of prime numbers
 *
 * @param {number} primesNeeded - number of primes to generate defaulted to 10
 *
 * This is an extract from the Sieve of Eratosthenes that generates a presumed maximum range to generate prime numbers from.
 * If these max range does not satisfy the number of primes needed, the max will be increased.
 * Based on statistics taken, the maximum range is mostly above the square of the number of primes needed.
 */
export const checkPrimeWithSoE = (primesNeededString = 10) => {
  return new Promise((resolve) => {
    const primesNeeded = Number(primesNeededString);
    if (primesNeeded < 1) return []; // Returns an empty array if primes is less than 1
    if (primesNeeded === 1) return [2]; // Returns only 2 as prime if one is needed
    if (primesNeeded === 2) return [2, 3]; // Returns 2, 3 as only primes if only two are needed.

    // Generates an array of indices from 0 to maximum range (square of then number of primes needed) and populates it with true to show that at the beginning all numbers are primes.
    const primeArrayMap = new Array(primesNeeded * primesNeeded).fill(true);
    // We loop through the numbers and change their values for multiples of all numbers till the number of primes needed.
    let i = 2;
    while (i <= primesNeeded) {
      if (primeArrayMap[i]) {
        for (
          let multiple = i * i;
          multiple < primeArrayMap.length;
          multiple += i
        ) {
          primeArrayMap[multiple] = false;
        }
      }
      i++;
    }
    // We resolve the promise with the indices of the true values as they are the only numbers that arent multiples of numbers
    // The array is sliced to get the exact number of prime numbers we need.
    resolve(
      primeArrayMap
        .map((prime, i) => {
          if (prime) return i;
          return undefined;
        })
        .filter(Boolean)
        .slice(1, primesNeeded + 1)
    );
  });
};

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
