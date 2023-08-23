// Print odd numbers in an array

// anonymous function

const printOddNumbers = function (arr) {
    arr.forEach(function (num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
}([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// IIFE

(function (arr) {
    arr.forEach(function (num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// ---------------------------- //

//Convert all the strings to title caps in a string array

// anonymous function

const convertToTitleCaps = function (arr) {
    return arr.map(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

const result1 = ["hello", "guvi", "example"];
const titlCaps = convertToTitleCaps(result1);
console.log(titlCaps);

//IIFE

const Titlecaps = (function (arr) {
    return arr.map(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "guvi", "example", "over"]);

console.log(Titlecaps);

// --------------------------------- //

// Sum of all numbers in an array

// anonymous function

const sumOfArray = function (arr) {
    return arr.reduce(function (total, num) {
        return total + num;
    }, 0);
};

const inputArray1 = [1, 2, 3, 4, 5, 6,];
const result2 = sumOfArray(inputArray1);
console.log(result2);

// IIFE

const sumOfArrayType = (function (arr) {
    return arr.reduce(function (total, num) {
        return total + num;
    }, 0);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(sumOfArrayType);

//Return all the prime numbers in an array

// anonymous function

const isPrime = function (num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 == 0 || num % 3 == 0) return false;
    let i = 7;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};

const getPrimeNumbers = function (arr) {
    return arr.filter(function (num) {
        return isPrime(num);
    });
};

const inputArray2 = [2, 3, 5, 7, 10, 11, 13];
const primeNumbers = getPrimeNumbers(inputArray2);
console.log(primeNumbers);

// IIFE

const primes = (function (arr) {
    return arr.filter(function (num) {
        return isPrime(num);
    });
})([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);

console.log(primes);

// Return all the palindromes in an array

// anonymous function

const isPalindrome = function (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
};

const getPalindromes = function (arr) {
    return arr.filter(function (str) {
        return isPalindrome(str);
    });
};

const inputArray3 = ["malayalam", "hello", "level", "world", "racecar"];
const Palindrome = getPalindromes(inputArray3);
console.log(Palindrome);

// IIFE

const Palindromes = (function (arr) {
    return arr.filter(function (str) {
        return isPalindrome(str);
    });
})(["malayalam", "hello", "level"]);

console.log(Palindromes);

// ----------------------------- //

// Return median of two sorted arrays of the same size

// Anonymous function

const findSortedArray = function (num1, num2) {
    const merged = [...num1, ...num2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

const num1 = [1, 3, 5];
const num2 = [2, 4, 6];
const Median = findSortedArray(num1, num2);
console.log(Median);

// IIFE

const median = (function (num1, num2) {
    const merged = [...num1, ...num2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
console.log(median);

// ---------------------------------- //

// Remove duplicates from an array

// anonymous function

const removeDuplicate = function (arr) {
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
};

const duplicate = [1, 2, 3, 4, 5, 6, 2, 3, 3, 4, 5, 5, 7];
const result = removeDuplicate(duplicate);
console.log(result);

//IIFE

const remove = (function (arr) {
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });
})([1, 3, 3, 3, 4, 5, 9, 4, 5, 7, 9]);

console.log(remove);

// --------------------------------- //

// Rotate an array by k times

// Anonymous function

const rotateArray = function (arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

const inputArray = [1, 2, 3, 4, 5, 6, 7];
const Rotating = rotateArray(inputArray, 3);
console.log(Rotating);

//IIFE

const rotatedArray = (function (arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
})([5, 6, 7, 8, 9, 10, 11, 12], 4);

console.log(rotatedArray);
