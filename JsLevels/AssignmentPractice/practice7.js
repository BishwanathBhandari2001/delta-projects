//question 1 
// let arr=[1,2,3,4,5];

// const square = arr.map((num)=> num*num );
// console.log(square); 

// let sum = square.reduce((acc,ele) => acc+ele);
// console.log(sum);

// let avg = (sum/arr.length);
// console.log(avg);


// //question 2 
// let arr=[1,2,3,4,5,-4,-2];
// console.log( arr.map((ele)=> ele+5) );


//question 3
// let string = ["aman", "kaman","ram","laxman","shyam"];
// console.log( string.map((str)=> str.toUpperCase() ) );


//question 4
// let doubleAndReturnArgs = (arr, ...args)=> [
//     ...arr,
//     ...args.map((el)=> el*2)
// ];
// console.log( doubleAndReturnArgs([1,2,3,4,5],3,4,5));



//question 5
const mergeObjects = (obj1,obj2)=>  ({...obj1, ...obj2});

console.log( mergeObjects(
{id: 1,name:"kashi"},{sn:2,username: "bishwanath"}));
