let obj1 = { name: "Person 1", age: 5};
let obj2 = { age: 5, name: "Person 1" }; 

function compareJSONobjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (obj1[key] !== obj2[key] ) {
            return false;
        }
    }

    return true;
}

const result = compareJSONobjects(obj1, obj2);
console.log(result);


// let numbers =[1,2,3,4,6,5];

// console.log(numbers);