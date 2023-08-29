class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    introduce() {
        return `Hi, I'm ${this.getFullName()}, a ${this.age}-year-old ${this.gender}.`;
    }
}

// Example usage
const person1 = new Person("John", "Doe", 30, "male");
console.log(person1.introduce());

const person2 = new Person("Jane", "Smith", 25, "female");
console.log(person2.introduce());
