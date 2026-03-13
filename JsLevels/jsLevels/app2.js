//trim () method
// let str= "   lands  ";
// let meth= str.trim();
// console.log(meth);

// let msg = "  hello everyone";
// console.log(msg.trim());

// let password = prompt("Enter Password");
// console.log(password.trim());

//toUpperCase and toLowerCase() methods
// let string= "BishwanathBhandari";
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

//indexOf();
// let index= "BishwanathBhandarilovecoding";
// console.log(index.indexOf("i"));
// console.log(index.indexOf("y"));
// console.log(index.indexOf("love"));

//method-chaining
// let str ="   livealone  ";
// console.log(str.trim().toUpperCase());
// console.log(str.trim().indexOf("i"));

//slice() method
// let stri= "apnacollege";
// console.log(stri.slice(3));
// console.log(stri.slice(2,6));
// console.log(stri.slice(-2));
// console.log(stri.slice(4, stri.length));

//replace(old, new)
// let str = "kashikashi";
// console.log(str.replace("kashi","Bishwanath"));
// console.log(str);
// console.log(str.replace("ka","Aa"));

// let stri = "love coding";
// console.log(stri.repeat(3));

//practice question
// let msg ="help!";
// console.log(msg.trim().toUpperCase());

// let name= "ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// console.log(name.slice(4).replace("l","t").replace("l","t"));

//Array in js
// let gods =["ram","shyam","mohan","gopaal"]; console.log(gods[1]);
// console.log(gods.length); console.log(typeof gods);

// let marks= [23,54,76,35,97];
// console.log(marks[4]); console.log(marks[7]);

// let info = ["Bishwanath",87,8.45];
// console.log(info[0]); console.log(info[0][0]); console.log(info[0][5]);

// let arr=[]; console.log("empty string",arr);
// let fruits = ["mango","Apple","Banana"];
// fruits[0]="Grapes"
// console.log(fruits);

//array methods
// let cars=["bmw","ferrari","toyota","rolex"];
// console.log(cars.push("mahindra")); console.log(cars);
// console.log(cars.pop());  console.log(cars);
// console.log(cars.unshift("tesla")); console.log(cars);
// console.log(cars.shift());  console.log(cars);

// let followers= ["a","b","c","d"];
// let blocked = followers.shift();
// console.log(followers);
// console.log(blocked);

//practice questions
// let start = ["january","july","march","august"];
// console.log(start);
// console.log(start.shift());  console.log(start);
// console.log(start.shift());  console.log(start);
// console.log(start.unshift("june")); console.log(start);
// console.log(start.unshift("july")); console.log(start);

// array methods indexOf("args") returns index
// let color = ["red","yellow","blue"];
// console.log(color.indexOf("yellow"));
// console.log(color.indexOf("green"));
// console.log(color.indexOf("Yellow"));

//includes("args") search for value gives T and F
// console.log(color.includes("red"));
// console.log(color.includes("green"));

//concate
// let rgb = ["orange","green","violet"];
// console.log(color.concat(rgb));
// console.log(color.concat(cars));
// console.log(rgb);

//reverse 
// console.log(rgb.reverse());

//slice(start,end);
// let col= ["reds","yellows","green","blue","white","grey","pink"];
// console.log(col.slice());
// console.log(col.slice(2));
// console.log(col.slice(2,3));
// console.log(col.slice(-2));

//splice(start,deleteitem,additems)
// let birds= ["pigeon","parrot","eagle","owl","sparrow","crow","cucu","hen","ducks","squarrel","virture","ostrich","woodpeacker","peacock"];
// console.log(birds.length);
// console.log(birds);
// console.log(birds.splice(13)); //remove from 13 
// console.log(birds.splice(0,1)); // start from 0 remove 1 element
// console.log(birds.splice(1,4));
// console.log(birds.splice(0,0,"kingfisher")); console.log(birds);
// console.log(birds.splice(1,0,"penguin","kawl")); console.log(birds);
// console.log(birds.splice(2,2,"birds")); console.log(birds); //start from 2 remove 2 add birds in 2nd place 

//sort
// let days = ["monday","sunday","friday","tuesday","wednesday","saturday"];
// console.log(days.sort());
// let square = [25,16,4,49,36,9];
// console.log(square.sort());
// let name=["ramu","kashi","bhola"];
// console.log(name.sort());
// let nums= [8,4,23,54,78,1,6];
// console.log(nums.sort());

//practice questions
// let start= ["january","july","march","august"];
// console.log(start);
// console.log(start.splice(0,2,"july","june")); console.log(start);

// let arr=['c',"c++","html","javascript","python","java","c#","sql"];
// console.log(arr);
// console.log(arr.reverse().indexOf("javascript"));

//array references
// let arr=['a','b','c','d'];
// let arrCopy=arr;
// console.log(arr==arrCopy);
// console.log(arr.push('f'));
// console.log(arrCopy);
// console.log(arrCopy.pop());

//constant arrays
// const arr= [2,4,5,6,7];
// console.log(arr.push(1));
// console.log(arr.pop());

//practice question
let game=[['x',null,'0'],[null,'x',null],['0',null,'x']];
console.log(game);
