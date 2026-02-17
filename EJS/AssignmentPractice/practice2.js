// let arr=[7,9,0,-2];
// let n=3;

// console.log(arr.slice(0,n));

// console.log(arr.slice(arr.length-n));

// let str=0; //let str=prompt("enter a string");
// if(str.length==0){
//     console.log("empty string");
// }
// else{
//     console.log("not an empty string");
// }

// let str="KaShiBisHwAnaTh";
// let idx=3;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("character is lower case");
// }
// else{
//      console.log("character is  not lower case");
// }

let strs= "     hello world     "; //let input=prompt("enter string"); 
console.log(`original string: ${strs}`);
console.log(`string without spaces :  ${strs.trim()}`);

let arr=["hello",'a',23,64,99,-6];
let item=64;
if(arr.indexOf(item)!=-1){
    console.log("element exist");
}
else{
    console.log("element  not exist");
}



//alternative
//  let ele=[2,4,5,1,6,8];
// let str=["ram","gopi","krishna","mohan"];
// if(str.includes("krishna") && ele.includes(4)){
//     console.log("element exist");
// }
// else{
//     console.log("element not exist");
// }