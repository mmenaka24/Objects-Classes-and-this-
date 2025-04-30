class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name}, ${this.age} years old`;
    }
}

const me = new Person("Menaka", 22);
console.log(me.describe());
