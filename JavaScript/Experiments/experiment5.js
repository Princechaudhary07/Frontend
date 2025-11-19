/*      Task 1     */

// console.log("Hello, World");

// const val = prompt("Enter your Name:")
// //alert("Hi " +val);

// document.writeln(`<h1>Welcome ${val}</h1>`);





/*      Task 2     */
// const val  = prompt("Please Enter Your Age: ");   


// if(val>=18){
//     alert("You are Eligible to Vote!")
// }else{
//     alert("You are Not Eligible to Vote!")
// }





/*       Task 3      */


// const val  = prompt("Please Enter Your Age: "); 

// console.log(Number(val));


// document.write(`<h1> Type: ${typeof Number(val)}</h1>`)

// scope , scope chain, call stack ,execution context, TDZ, hoisting, closure


/*    Important topics:-
        
        setTime, setInterval, Async Js, MicroTask Queue



let name = "alice";
let name = "bob";
console.log(name);



const isOdd = num => num%2===1;

console.log(isOdd(3));


const greet = name => "Hello " + name + "!";

const add = (a,b) => a+b;

const isEven = num => num%2==0;

console.log(greet("Pawan"));
console.log(add(2,3));
console.log(6);



const val = "Riya";
console.log(`Hello my name is ${val}! 
i was born in ${2025-21}`);


const user = "Aman";
const points = 120;
console.log(`Hey ${user},
you have ${points} Points!`);


const person = {
        firstName: "Nitin",
        lastName : "Sharma",    // never make arrow function in a Object in js
        age:21,
        introdce: function(){
                console.log(`Hi my name is ${this.firstName} ${this.lastName}
and i'm ${this.age} years old`);
                
        }



}
person.birthYear = 2025 - person.age;

const printMessage = () => {
        console.log(`Hi i'm ${person.age} years old`);
        console.log(person);
        
        
}
printMessage();



const fruit = ["Kela", "Chukandar", "amrud", "ananas", "chiku"]
const [,secondFruit, , ,fifthFruit] = fruit; // array Destructuring

console.log(secondFruit);
console.log(fifthFruit);

//(...rest operator) at LEFT  = (spread operator) at RIGHT

const res = [...arr1 , ...arr2]   //Spread Operator
 
*/

let cnt = 10;
const timer = setInterval(()=>{
        console.log(cnt);
        cnt--;
        if(cnt===0) {
                console.log("Boom") 
                clearInterval(timer); 
        }
        
        

},1000)