class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    describe() {
        return `${this.firstName}, ${this.age} years old`;
    }
}

const printFullName = function () {
    console.log(this.firstName, this.lastName);
};

const printDetails = function () {
    console.log(this.describe());
};

const me = new Person("Menaka", "M", 22);

const boundPrintFullName = printFullName.bind(me);
const boundPrintDetails = printDetails.bind(me);

boundPrintDetails();
boundPrintFullName();
