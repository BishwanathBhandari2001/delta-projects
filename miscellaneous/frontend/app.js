// let arr = [1,2,3];  //prototype concept
// let arr2 = [3,5,6];

// arr.sayHello = ()=> {
//     console.log("hello i am arr");
// }

// arr2.sayHello = ()=> {
//     console.log("hello i am arr");
// }

// arr.push(4);
// console.log(arr.sayHello());

// console.log(arr.sayHello === arr2.sayHello);
// console.log("abc".toUpperCase === "xyz".toUpperCase); //prototype

// console.log(arr.__proto__);  // see  and use in console to these all
// console.log(String.prototype);
// console.log(Array.prototype);


    //factory functions concept:  a fn that creates objects
// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1 = personMaker("kashi", 34);  //objs create single only  & copy
// console.log(p1);
// let p2 = personMaker("ramya", 53); // it creates copy itself
// console.log(p2);


       //Constructors -return nothing & start with Capital letter
// function PersonMaker(name, age){
//     this.name= name;
//     this.age = age;  //constructor syntax
//     console.log(this);
// }

// PersonMaker.prototype.talk = function(){
//     console.log(`Hi my name is ${this.name}`);
// }

//     //NEW operator use to create instances(objects)
// let p1= new PersonMaker("kashi", 56);
// let p2= new PersonMaker("jhasi", 68);


        //***we i'll use only Classes to create multiple objs. it's best.
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
    
// }
// let a1 = new Person ("ram", 45);  //objs
// console.log(a1);



        //***Inheritance***/
// class Person {  //Parent class
//     constructor(name, age){
//         console.log("Person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }

// }
// class Student extends Person {  //child class
//     constructor(name, age, marks){
//         console.log("student class constructor");
//         super(name, age); // parent class constructor is being called
//         this.marks = marks;
//     }
    
// }

// class Teacher extends Person { //child class
//     constructor(name, age, subject){
//        super(name, age); // parent class constructor is being called
//         this.subject = subject;
//     }
    
// }

// let stu1 = new Student("kashi", 21, 89);  //objects
// console.log(stu1.marks); console.log(stu1.talk());

// let t1 = new Teacher("bishwa", 43, "English");
// console.log(t1.age); console.log(t1.talk());



        //***Another Example of Inheritance***/
class Mammals{
    constructor(name){
        this.name= name;
        this.type = "warm-Blooded"
    }

    eat() {
        console.log("Eating Something");
    }

}

class Dogs extends Mammals{
    constructor(name){
    super(name);
    }

    bark(){
        console.log("Dog is Barking Bhaww!! Bhaw!!");
    }

    eat(){
        console.log("Dog sarkar is Eating Bones");  // method-overriding
    }
}

class Cats extends Mammals{  //child
    constructor(name){
    super(name);    
    }

    meow(){
        console.log("Cat is Meow!!");
    }
}

    // Objects
let dog1= new Dogs("jackie");
console.log(dog1.type); console.log(dog1.bark()); console.log(dog1.name);

let cat1 = new Cats("biliya");
console.log(cat1.meow()); console.log(cat1.type);