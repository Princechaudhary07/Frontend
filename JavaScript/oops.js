// const Person = function (name, age){
//     this.firstName = name;
//     this.age = age;
// }

// Person.prototype.introduce = ()=>{
//     console.log(`Hi, My name is ${this.name} and I'm ${this.age} old.`);
    
// }

// const person1 = new Person("pawan",20);
// console.log(person1);



/*  ES6 method  */

class Person{
    constructor(name, age){
        this.firstName = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, My name is ${this.name} and I'm ${this.age} old.`);
    }
}

const person1 = new Person("pawan",20);
console.log(person1);