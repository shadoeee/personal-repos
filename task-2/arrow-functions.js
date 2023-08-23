// Print odd numbers in an array

// Arrow function

const printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers(numbers1);

// ----------------------------------- //

// Convert all the strings to title caps in a string array

const convertToCaps = (strArray) => {
    return strArray.map(str => {
        return str.split('').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    });
};

const inputArray1 = ['hello', 'guvi', 'example'];
const result1 = convertToCaps(inputArray1);
console.log(result1);

// ---------------------------------------- //

// Sum of all numbers in an array

const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

const sum = [5, 4, 3, 2, 1];
const result2 = sumArray(sum);
console.log(result2);

// ----------------------------------- //

// Return all the prime numbers in an array

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

const getPrimeNumbers = (arr) => arr.filter(num => isPrime(num));

const numbers = [2, 3, 5, 6, 7, 11, 13, 16];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13]


// ------------------------------------ //

// Return all the palindromes in an array

const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const getPalindromes = (arr) => arr.filter(word => isPalindrome(word));

const inputArray = ['malayalam', 'vanakkam', 'level', 'hello'];
const result = getPalindromes(inputArray);
console.log(result);