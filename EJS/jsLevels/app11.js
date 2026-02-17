    //call stack in js
// function hello(){
//     console.log("inside hello functions");
//     console.log("hello everybody");
// }

// function demo(){
//     console.log("calling hello function");
//     hello();
// }

// console.log("calling demo function");
// demo();
//  console.log("function call done Bye! ");
 //html file in index8.html

    //visualize answer of call stack
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();   // breakpoints in source beside console


    //Single thread js run 1 code at a time
//synchronous nature
// let a = 10;
// console.log(a);
// let b= 15;
// console.log(b);
// console.log(a+b);

// // asynchronous nature
// setTimeout(()=> {
//     console.log("js is single thread");
// },2000);

// setTimeout(()=>{
//     console.log("hello world");
// }, 2000);

// console.log("browser hold the cmd in stack & then it run by js");



    //callback hell = callback nesting
let h1= document.querySelector("h1");

function changeColor( color, delay, nextColorChange ){
    setTimeout( ()=> {
        h1.style.color= color;
        if(nextColorChange){
            nextColorChange();
        }
    }, delay);
}

changeColor("blue", 1000 , ()=>{
    changeColor("red", 1000, ()=>{
        changeColor("green", 1000, ()=> {
            changeColor("aqua", 1000, ()=>{
                changeColor("yellow", 1000);
            })
        })
    })
});      // this code is solved at last using promise to make easy


//callback hell nested another example
// function savetoDB(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed> 4){
//         console.log("Success: data saved ",data);
//     }else{
//         console.log("failure: Weak Connection data not save");
//     }
// }

// savetoDB("bishwanath bhandari");


    //instead of above using nested hell for many data 
// function savetoDB(data, resolve, reject){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed> 4){
//         resolve();
//     }else{
//         reject();
//     }
// }

// savetoDB("ram is boy", ()=>{
//     console.log("success: your data was saved");
//     savetoDB("hello world", ()=>{
//         console.log("success:2 data 2 saved");
//         savetoDB("kashi bhandari", ()=>{
//             console.log("success:3 data 3 saved");
//         },
//         ()=>{
//             console.log("failure:3 data not saved ");
//         });
//     }, 
//         ()=>{
//             console.log("failure:2 weak connection");
//         });
// }, 
// ()=>{
//      console.log("failure: your data Not saved weak connection");
// });


    ///***Promise = object has resolve and reject***/
function savetoDB(data){
    
    return new Promise ((resolve, reject)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
          if(internetSpeed> 4){
        resolve("Success: data was saved");
    }else{
        reject("Failure: data not saved weak connection");
    }
  
    });
}
//copy paste in console savetoDB
//savetoDB("kashi bhandari"); // pending, rejected , resolve



        //// then() and catch() methods apply to above 
// let request = savetoDB("web development");
// request
// .then( ()=>{
//     console.log("resolved");
//     console.log(request);
//     })
// .catch(()=>{
//     console.log("rejected");
//     console.log(request);
// });

    ///compact way to write  above code using then() & catch() method
// savetoDB("web development")
// .then(()=>{
//     console.log("resolved");
// })
// .catch(()=>{
//     console.log("rejected");
// });

        /// promise-chaining  solved callback hell problem in nesting
// savetoDB("web development")
// .then(()=>{  //resolve or success or result
//     console.log("data1: saved resolved successfully");
//     return savetoDB("another data")
// })
// .then(()=>{
//     console.log("data2: saved");
//     return savetoDB("kashi bhandari");
// })
// .then(()=>{
//     console.log("data3: saved");
//     return savetoDB("javascript");
// })
// .then(()=>{
//     console.log("data4: saved");
// })
// .catch(()=>{   //reject or failure or error
//     console.log("rejected data");
// });


    //**we can print promise as  result  or error **/
// savetoDB("web development")
// .then((result)=>{  //resolve or success
//     console.log("data1: saved resolved successfully");
//        console.log("result of promise:", result);
//     return savetoDB("another data");
// })
// .then((result)=>{
//     console.log("data2: saved");
//        console.log("result of promise:", result);
//     return savetoDB("kashi bhandari");
// })
// .then((result)=>{
//     console.log("data3: saved");
//        console.log("result of promise:", result);
//     return savetoDB("javascript");
// })
// .then((result)=>{
//     console.log("data4: saved");
//        console.log("result of data:", result);
// })
// .catch((error)=>{   //reject or failure
//       console.log("error of promise:", error);
//     console.log("rejected data");
// });



        /// refactor old color change code using promise
// let h1= document.querySelector("h1");

function changeColor( color, delay){  
    return new Promise ((resolve, reject)=>{
        setTimeout( ()=> {
        h1.style.color= color;
        
        resolve("color changed successfully");

    }, delay);
    });
    
}

changeColor("red", 1000)
.then(()=>{
    console.log("red color was changed");

    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("blue color was changed");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("green color was changed");
    return changeColor("pink", 1000);
})
.then(()=>{
    console.log("Pink color was changed");
    return changeColor("aqua", 1000);
})
.then(()=>{
    console.log("aqua color was changed");
    return changeColor("purple", 1000);
})
.then(()=>{
    console.log("purple color was changed");
    return changeColor("red", 1000);
})
.then((result)=>{
    console.log("red color was changed");
    console.log("result of Promise:",result);
})


//there will not any error so i will not use catch or we can use it