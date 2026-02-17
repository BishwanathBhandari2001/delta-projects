// let arr= [8,9,10,1,2,3,4,5,6,7];
// let num = 5;
       ////elements larger than a number num
// function getElement(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]); 
//         }
//     }
// }
// getElement(arr,num);


// let str = "abcdabcdefgggh";
//  //function to getunique string
// function getUnique(str){
//     let ans="";
//     for(let i=0; i<str.length; i++){
//         let currchar= str[i];
//         if(ans.indexOf(currchar) == -1){
//             //if currchar is not added then add it in ans.
//             //otherwise it is a duplicate.
//             ans+=currchar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));


// let country = ["Australia", "Germany","United States of America"];

// function longestName(country){

//     let ansIdx = 0; //assume 1st country is longest
//     for(let i=0; i<country.length; i++){
//         let anslen =country[ansIdx].length; 
//         // console.log(anslen,"anslen");
//         let currlen=country[i].length;
//         // console.log(currlen,"currlen");

//         if(currlen> anslen){
//             ansIdx=i;  //update index if we find longer name
//         }
//     }
//     return country [ansIdx];
// }
// console.log(longestName(country));


// let str = "bishwanath";
// function countVowels(str){
//     let count =0;
//     for(let i =0; i<str.length; i++){
//         if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u') {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVowels(str));


let  start =100;
let end = 200;
 function generatRandom(start, end){
    let diff = start - end;
    return Math.floor(Math.random()*diff)+start;
 }

 console.log(generatRandom(start,end));