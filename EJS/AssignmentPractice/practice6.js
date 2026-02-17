// const arrayAverage = (arr)=>{

//     let total =0;
//     for(let number of arr){
//         total += number;   //console.log(number);
//     }

//     return total/ arr.length;
// };
// let arr=[1,2,3,4,5,6];
// console.log(arrayAverage(arr));

//**Alternative of above**/

// const arrayAverage = (arrnum)=>{
//     let total=0;
//     for(let i=0; i<arrnum.length; i++){
//          total += arrnum[i]; 
//     }
//     return total/arrnum.length;
// }

// let arrnum = [1,2,3,4,5,6];
// console.log(arrayAverage(arrnum));

// let n=4;
// const isEvens = (n)=> n%2==0;
// // console.log(isEvens(4));
// console.log(isEvens(n));

// //alternative of above **/
// const isEven = (n)=> {
//     if(n%2==0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// };
// isEven(2);

// //predict output
// const object= {
//     message: 'Hello, World!',

//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);

//predict output
let length = 4;

function callback(){
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback){
        callback();
    },
};

object.method(callback,1,2);