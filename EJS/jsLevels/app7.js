   //**forEach method of Array**//
   
// let arr=[1,2,3,4,5];
// arr.forEach( (ele)=>{
//     console.log(ele);
// });
// //or 
// arr.forEach(function(ele){
//     console.log(ele);
// });
// //or 
// let print = function(ele){
//     console.log(ele);
// };
// arr.forEach(print);

// let arr= [{    //array objects
//     name:"kashi",
//     mark: 89
// },{
//     name:"shiva",
//     mark: 78
// },{
//     name:"krishna",
//     mark: 96
// }];

// arr.forEach( (students)=>{
//         console.log(students);
// });
// arr.forEach( (stud)=>{
//         console.log(stud.name);
// });

// for(let stu of arr){
//     console.log(stu);
//     console.log(stu.mark);
// }



//**  map method **//

// let num = [1,2,3,4,6];
// let double = num.map( (ele)=>{
//     return ele*2;
// });
// console.log(double);

// let arr= [{    //array objects
//     name:"kashi",
//     mark: 89
// },{
//     name:"shiva",
//     mark: 78
// },{
//     name:"krishna",
//     mark: 96
// }];

// let cgpa = arr.map( (ele)=>{
//     return ele.mark/10;
// });

// console.log(cgpa);



//**filter method***/
// let nums= [1,2,4,5,3,6,7,3,9,12,8];
// let ans = num.filter( (num)=>{
//     return nums%2==0;
// });
// console.log(ans);

// let odd = nums.filter( (ele)=>{
//     return !(ele%2 == 0);
// });
// console.log(odd);



//**Every method**/ && operator all true then o/p otherwise false no o/p
// let arr=[2,4,6,12,34];
// arr.every( (ele)=> {
//     return ele%2== 0;
// } );
// console.log(arr);

// let ar=[1,2,4,6,8];
// let ans =ar.every( (ele)=>ele%2==0);
// console.log(ans);  // ar by check on webpage .


//reduce(acc, ele) method
// let nums=[1,2,3,4,5,6,7];

// let sum = nums.reduce( (res, ele)=>{    //sum of all nums
//     // console.log(res);
//      return res+ele;
// });
// console.log(sum);


// let num = [2,3,4,5,3,4,7,8,1,2];  //maximum number

// let result = num.reduce( (max, ele)=>{
//     if(max>ele){
//         return max;
//     } else {
//         return ele;
//     }
// });
// console.log(result);

//practice question

// for(let eles of num){
//     console.log(eles*10);
// }

// let nm = [10,30,40,50];  //all multiply by 10 or not
// let eve = nm.every( (ele)=> ele%10==0);
// console.log(eve);

// let mini = num.reduce( (min , ele)=>{ //minimum number
//     if(min<ele){
//         return min;
//     }else{
//         return ele;
//     }
// });
// console.log(mini);

//alternative 
// function getmin(nums){
//     let mini = nums.reduce( (mins , ele)=>{ //minimum number
//     if(mins<ele){
//         return mins;
//     }else{
//         return ele;
//     }
// });
// return mini;
// }

// let nums =[10,20,4,50,12];
// console.log(getmin(nums));


//**Default parameters**/ make always 2nd param as default not 1st

// function sum( a, b=10){
//     console.log(a+b);
// }
// sum(2);

// function sm ( a=2, b){   // 3 overwrite a values so we make default 2nd
//     console.log(a+b);
// }
// sm(3);

// function multi (b, a=13){ //here we give default value to a but pos chng
//     console.log(a+b);
// }
// multi(4);

// function su(a, b=5){
//     console.log(a+b);
// }
// su(6,4);



//**Spread**/  ...3dots array[] and string literals

// let arr=[1,2,3,4,5,6];
// console.log(Math.min(...arr))
// console.log(Math.max(...arr));
// console.log(...arr);
// console.log(..."BishwanathBhandari");

// let ar =[1,2,3,4,5];
// let newArr = [...ar];
// console.log(newArr);

// let char = [..."Hello"];
// console.log(char);
// console.log(..."good morning");
// let string = [..."good morning"];
// console.log(string);

// let even = [2,4,6,8,10,12];
// let odd= [1,3,5,7,9,13,11];
// console.log(...odd, ...even);


//spread with objects{} literals 

// let data = {
//    email:"bishwanath@gmail.com",
//    password: "abcde"
// };

// let datacopy = {...data, id: 124 , city: "janakpur"};
// console.log(datacopy);



//**Rest opposite of spread to make args into array to use arrmethods**

// function sum(...args){
//    for(let i =0; i<args.length; i++){
//       console.log("this is index: ",args[i]);
//    }
//    return args.reduce ( (acc,el)=> acc+el);
// }
// console.log(sum(1,2,3,4,5));

// function maxx (msg, ...args){
//    return args.reduce( (max,ele)=>{
//       if(max>ele){
//          return max;
//       } else{
//          return ele;
//       }
//    });
// }
// console.log(maxx("hello", 3,4,5,6,7,9,-80));
// console.log(maxx( 105,  0,4,5,6,79,9,));

// function sum (){
//    console.log(arguments);  //args is collection its not array 
//    console.log(arguments.length); // it suport only lenth 
//    console.log(arguments.push(9));
// }
// sum();
// sum(1,2,3,4,5);



// Destructing : storing values of ARRAY into multiple Variable

// let names = ["aman", "kaman","baman","daman","chaman"];
// let winner = names[0]; console.log(winner);
// let runner = names[1]; console.log(runner);

// let [winner, runner, others]=names; console.log(winner,others);
// let [winner, runner, ...others] = names; console.log(winner, others);


//destructing  with OBJECTS

// const student = {
//    name:"kamesh",
//    class: 10,
//    age:14,
//    subjects: ["nepali", "english", "Math", "Science", "social-studies"],
//    username: "kamesh 123",
//    password: 1234
// };
// // console.log(student);
// let age= student.age; console.log(age);
// let name = student.name; console.log(name);

// const {username:user, password:pass, city="janakpur"} = student;
// console.log(user, city);
// console.log(username);