let arr= [1,2,3,4,5,6,2,3,2];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);


let number= 287152;
let count = 0;

while(number>0){
    number= Math.floor(number/10);//cutoff last digit
    count++;
}
console.log(`total digits in number is ${count}`);


let nums= 287152;
let sum=0;
while(nums>0){
    let digit =nums%10;  //get last digit
    sum+=digit; //add last digit to sum
    nums=Math.floor(nums/10); //remove last digit
}
console.log(`sum of all digits is ${sum}`);


let n= 5;
let factorial=1;

for(let i=1; i<=n; i++){
    factorial*=i;
}
console.log(`factorial of ${n} is ${factorial}`);


let array= [2,5,10,4,2,7,8,1,9];
let largest=0;

for(let i=0; i<array.length; i++){
    if(largest<array[i]){
        largest = array[i];
    }
}
console.log(`largest number in  array is ${largest} `);