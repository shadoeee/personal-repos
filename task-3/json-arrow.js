// for loop

const JsonArray = [
    { "name": "Bala", "age": 21 },
    { "name": "Ganesh", "age": 22 },
    { "name": "Tony", "age": 45 }
];

for (let i = 0; i < JsonArray.length; i++) {
    const element = JsonArray[i];
    console.log(element);
}

// ------------------------------- //

// for in

const JsonArray1 = [
    { "name": "hema", "age": 22 },
    { "name": "mani", "age": 25 },
    { "name": "briii", "age": 18 }
];

for (const index in JsonArray1) {
    const result = JsonArray1[index];
    console.log(result);
}

// ----------------------------- //

// for of

const JsonArray2 = [
    { "name": "ashwin", "age": 22 },
    { "name": "vino", "age": 25 },
    { "name": "Abi", "age": 18 }
];

for (const index of JsonArray2) {
    console.log(index);
}

// ------------------------------ //

// for Each

const JsonArray3 = [
    { "name": "maji", "age": 28 },
    { "name": "thabu", "age": 27 },
    { "name": "harini", "age": 19 }
];

JsonArray3.forEach(result3 => {
    console.log(result3);
})

// ------------------------------- //

