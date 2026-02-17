//objects
// const students = {
//     name:"bishwanath",
//     roll_no: 200,
//     age: 24, 
//     marks: 8.95,
//     city: "janakpur"
// };
// console.log(students);

// const items ={
//     jackets: "winter addidas",
//     color: ["red","black"],
//     price:400
// };
// console.log(items);

// const post={
//     username: "Bishwanath Bhandari",
//     content: "this is my first facebook post",
//     likes: 1050,
//     repost: 10,
//     tags: ["@kashiraj","@hariom"]
// };
// console.log(post);
// //access objects 2 ways obj["key"]; obj.key;
// console.log(post["tags"]);
// console.log(post.content); console.log(post.tags[1]);

//Objects automatically converts into string
// const convert= {
//     1: 'a',
//     2: 'b',
//     true: 'c',
//     null: 'd',
//     undefined: 'e'
// };
// console.log(convert[1]);
// console.log(convert[2]);
// console.log(convert["true"]);

//Add/update value and properties 
// const students = {
//     name:"bishwanath",
//     roll_no: 200,
//     age: 24, 
//     marks: 8.95,
//     grade: 9,
//     city: "janakpur"
// };

// console.log(students.cgpa=8.55);
// console.log(students.marks=[84,64,75,88]);
// console.log(students.subject="cse");
// console.log(students.grade='A');
// console.log(students);

// console.log(delete students.cgpa);
// console.log(students);

// object of object
// const classinfo={
//     shiv:{
//         grade: 'A+',
//         city: "Pipara",
//         class: +2
//     },
//     sagar:{
//         grade: 'A',
//         city: "janakpur",
//         class: 8
//     },
//     rakesh:{
//         grade: 'B',
//         city: "sahodwa",
//         class: 12
//     }
// };

// console.log(classinfo);
// console.log(classinfo["sagar"]);
// console.log(classinfo.shiv.city);
// console.log(classinfo.shiv.fees= 40000);
// console.log(classinfo);


//Array of objects
// const classInfo = [
//     {
//         name: "shiv",
//         grade: 'A+',
//         city: "Pipara",
//         class: +2
//     },
//     {
//         name: "sagar",
//         grade: 'A',
//         city: "Jnk",
//         class: 10
//     },
//     {
//         name: "rajesh",
//         grade: 'B+',
//         city: "sahodwa",
//         class: 11
//     }
// ];

// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[2].address="nepal");
// console.log(classInfo[1].class);


//math objects
//  console.log(Math.PI);
//  console.log(Math.E);
//  console.log(Math.abs(-33));
//  console.log(Math.abs(23));
//  console.log(Math.pow(2,3));
//  console.log(Math.sqrt(5));
//  console.log(Math.floor(5.99999));
//  console.log(Math.ceil(6.233333));
//  console.log(Math.random());
//  console.log(Math.random());
//  console.log(Math.max(6,10));
//  console.log(Math.min(5,24));
//  console.log(Math.round(32.534));

// let num = Math.random();  //0 to 9
// num = num*10; // * 10 or 100 0r 1000
// num= Math.floor(num);  //math.round(num)
// num= num+1;   // +1 = 1 to 10    and +0 = 0+ 10
// console.log(num);

// let random = Math.floor(Math.random()*10)+1; // in a single line
// console.log(random);

// let rand = Math.floor(Math.random()*100)+1;
// console.log(rand);

let ran= Math.floor(Math.random()*5)+1;
console.log(ran);

let choice = Math.floor(Math.random()*5)+20; // 20 21 22 23 24 tk
console.log(choice);

let choic= Math.floor(Math.random()*5)+21; //21 - 25 tk
console.log(choic);