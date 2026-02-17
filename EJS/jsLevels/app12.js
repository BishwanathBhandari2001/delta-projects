    //async function  is by default return Promise
// function jeo(){
//     return "hello this is normal function";
// }    //index8.html link
// // jeo();  //run it on console window


// // add async keyword infront of any function to make async
// async function geo(){
//     return "hello this is aynsc function"; //promise fulfilled No error
// }
// // geo();
// async function geor(){   //throw keyword is use to throw error
//     throw "this is an error";
//     return "hello this is aynsc function";   //promise rejected Error
// } //geor()

// async function hello() {
//     throw " rejected , 404 server not found  "  // error
//     // return "resolved";   //no error promise success
// }
// hello()
// .then((result)=>{
//     console.log("how are u");
//     console.log("the promise is: ",result);
// })
// .catch((error)=>{
//     console.log("rejected promise");
//     console.log("the promise is :", error);
// });

// let demo = async ()=>{
//     return 5;
// } // arrow function for async function 
// demo();



        // await function  is use to wait and always use with async
// function getNum(){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log("num is : ", num);
//             resolve("Promise resolved");
//         }, 1000);
//     });
    
// }

// async function demos() {
//     getNum();  // all are run at once but we want 1 by 1
//     getNum();
//     getNum();
//     getNum();
// }  // demos(); in console

// async function demos() {
//         await  getNum();  // all are run  1 by 1 using await keyword
//         await  getNum();
//         await  getNum();
//         await  getNum();
// }  //demos(); in console


    // we apply this logic on colorchange previous program with Handle Reject
// let h1= document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() *5)+1;
//             if(num>3){
//                 reject("Promise rejected");  // rejection
//             }

//             h1.style.color=color;
//             console.log(`Color changed to:${color}`);
//             resolve("color changed successfully");
//         },delay);
//     });
// }

// async function  colors() {   // handling rejection using try & catch
// try{
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("aqua", 1000);
//     await changeColor("purple", 1000);
//     await changeColor("brown", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("pink", 1000);
// }catch(err){
//     console.log("error caught");
//     console.log(err);
// }
// let a= 10;
// console.log(a);
// console.log("hello world");
//}     // colors(); in console

//api  catfact.ninja/fact   dog.ceo/api/breeds/image/random

    //json use {json formatter} to validate it json always in String frmt
        //Access data from json using this 2 methods & convert it into json & obj
// let jsonRes = '{"fact":"Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.","length":103}';
// console.log(jsonRes); // to print it  & will check in console

// let jsonObj = JSON.parse(jsonRes);  // json into js object
// console.log(jsonObj);
// console.log(jsonObj.fact);  // we can access as object After Converting
// console.log(jsonObj.length);


// let student = {    // convert obj in json format
//     name: "bishwanath bhandari",
//     age: 24
// };
// let jsonFor = JSON.stringify(student); //object into JSON
// console.log(jsonFor);


//API request TESTING TOOL  hoppscoth  & postman we use hopscoth


    //our request using FETCH(url)     response.json(); // to access
// let url = "https://catfact.ninja/fact";
    //let url = "https://catfact.ninja/fact2"; //error


// fetch(url)             //using promise
// .then((res)=>{
//     console.log(res);
//     res.json()
//     .then((data)=>{
//         console.log("data1 is : ",data.fact);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// });


// fetch(url)
// .then((res)=>{
//     return res.json();  //convert response in json format
// })
// .then((data1)=>{
//     console.log("data1: ",data1);
//     return fetch(url);
// })

// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2: ",data2.fact);
// })


// .catch((err)=>{
//     console.log(err);
// });



        // using async await and handling rejection
    
let url = "https://catfact.ninja/fact";
// let url = "https://catfact.ninja/fact2";// error 


async function randFact() {
    try{
         let res =  await fetch(url);
    console.log(res);
     let data1 = await res.json();
     console.log("data1: ",data1);
     
     let res2 = await fetch(url);
     let data2 = await res2.json();
     console.log("data2: ", data2.fact);

     let res3 = await fetch (url);
     let data3 = await res3.json();
     console.log("data3: ", data3);
    }catch(err){
        console.log("error - ",err);
    }
   
    console.log("bye bye!!");
    
}
randFact();