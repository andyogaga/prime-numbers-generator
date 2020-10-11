# Prime Numbers Generations

This is a reactjs Application.
A Short test to generate prime numbers based on particular input

Makes use of Sieve of Eratosthenes method of generating prime number for a particular range.

In this excercise, I took a calculated guess that the number of primes needed can be gotten from the range of 0 to square of that number.
E.g. If 10 primes are needed, these primes will always be between the range of `0 - 100` which is `10 squared`.

# Author

Andrew Ogaga

# Description

This application serves to generate first n prime numbers in a beautified format.

Two algorithms were created that both solve this problem in a pretty fast way. The Sieve of Eratosthenes is mainly used because it is considerably faster even for large ranges. Please find both in the folder structure stated below.

`src/utils/helper.js`

This makes use of Styled components for UI to achieve this feat.

# UI View

[Generate Prime Numbers](https://peaceful-varahamihira-f29e85.netlify.app)

# Installation Procedure

```
git clone `https://github.com/andyogaga/prime-numbers-generator.git`
cd prime-numbers-generator
npm install
npm start
```

# Tests Run

```
npm test
```
