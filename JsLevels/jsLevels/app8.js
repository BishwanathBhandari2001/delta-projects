 //just do on browser only to know
//window  
//console.dir(document);
//console.dir(document.all);
//console.dir(document.all[8]);
//console.dir(document.all [8] . innerText= "Iron Man");
//let imgObj= document.getElementById("mainImg");
//console.dir(imgObj);
//imgObj.src;
//imgObj.tagName;  and many more properties


//**selectById**/
//getElementById("mainImg");
//document.getElementById("imgs"); 
//getElementById("description");


//**selectByClassName**/
//document.getElementsByClassName("images");
//document.getElementsByClassName("images");
// let imgs = document.getElementsByClassName("oldImg");

// for(let i=0; i<imgs.length; i++){
//     imgs[i].src="assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }


//**selectByTagName**/
// document.getElementsByTagName("p");
// document.getElementsByTagName("span");
// document.getElementsByTagName("p")[1];
// document.getElementsByTagName("p")[1].innerHTML = "abc";


//**Query Selector**/
//console.dir(document.querySelector("tagname"));
//console.dir(document.querySelector(".className"));
//console.dir(document.querySelector("#idname"));

//console.dir(document.querySelectorAll("p"));


//**setting contents in objects**/
// let para = document.querySelector("a");
// para.textContent;
// para.innerText;
// para.innerHTML;

// let heading = document.querySelector("h1");
// heading.innerText = "Iron Man";
// heading.innerHTML = "<i> Iron Man </i>";
// heading.innerHTML = `<u> ${heading.innerText} </u>`;  //another way


//manipulating attrs using getAttribute(attr) & setAttribute(attr, value)
// let images = document.querySelector("img");

// console.log(images.getAttribute('id') );

// images.setAttribute('src', "assets/creation_3.jpeg");

// images.setAttribute('id', 'spiderman');
 
// console.log( images.getAttribute('id') );



//manipulate  using style 
// let heading = document.querySelector('h1');

// heading.style.color = "blue";
// heading.style.color = "pink";

// heading.style.backgroundColor = "aqua";

// let links = document.querySelectorAll (".box a");
// for(link of links){
//     link.style.color = "red";
// }

// for(let i =0; i<links.length; i++){
//     links[i].style.backgroundColor="green";
// }



//manipulate using classList

// let img = document.querySelector("img");
// console.log(img.classList);

// let heading = document.querySelector("h1");
// console.log(heading.classList);

// heading.classList.add("green");
// heading.classList.add("underline");

// heading.classList.remove("green");
// heading.classList.remove("underline");

// heading.classList.contains("underline");

// heading.classList.toggle("green");

// let box = document.querySelector(".box");
// console.log(box.classList);
// box.classList.add("bgcolor");




//Navigation  parentElement; children; previousSiblingElement; nextSib..
// let h1 = document.querySelector("h1");
// console.log(h1.parentElement);
// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);

// let ul = document.querySelector("ul");
// console.log(ul.parentElement);
// console.log(ul.children);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
// console.log(ul.childElementCount);
// console.log(ul.children[0]);

// ul.previousElementSibling.style.color="red";



//**Adding Elements**/  
// let newP = document.createElement('p');
// let body= document.querySelector('body');
// newP.innerText="this is anew element tag to adding element in webpage using js . before add we have to createElement then we mostly use append() which use to add newelement + content like string etc";

// body.appendChild(newP);

//append(ele)
//newp.append("this is another paragraph");
// let pa = document.createElement('p');
//let box = document.querySelector('.box');
//box.append(pa);
//pa.innerText= "this is the paragraph";
//box.append('this is next content');
//let btns = document.createElement('button');
//box.append(btns);
//btns.innerText="Click here";
//let bt = document.createElement('button');
//box.append(bt);
// bt.innerText= "doublecbtn";

//prepend(ele)
//let par= document.querySelector('p');
// let but = document.createElement('button');
//but.innerText = "Button!!";
//par.prepend(but);

//insertAdjacentElement(where, ele) 'before' , 'after' start & end
//let par= document.querySelector('p');
// let but = document.createElement('button');
//but.innerText = "Button!!";
// par.insertAdjacentElement('beforebegin', but);
// par.insertAdjacentElement('beforeend', but);
// par.insertAdjacentElement('afterbegin', but);
// par.insertAdjacentElement('afterend', but);


//removing element   removeChild(ele) remove()
// let bd = document.querySelector('body');

// let but = document.createElement('button');

// but.innerText = "Button!!";

// par.insertAdjacentElement('beforebegin', but);

// let par= document.querySelector('p');
// par.insertAdjacentElement('beforebegin', but);
// ​
// but.remove();
// bd.remove();

// bd.removeChild(box);
// let box = document.querySelector('.box');

// bd.removeChild(box);



//**Practice Questions**/
//question 1  
let para = document.createElement('p');
let body =  document.querySelector('body');
para.innerText="Hey I'm Red!";
para.classList="red";
body.appendChild(para);

//question 2 
let head3 = document.createElement('h3');
head3.innerText="I'm a blue h3!";
head3.classList= "blue";
body.prepend(head3);

//question 3
let divs= document.createElement('div');

body.append(divs);
divs.classList="divs";

let h1 = document.createElement('h1');
let p= document.createElement('p');

h1.innerText= "I'm in a div";
divs.append(h1);

p.innerText="ME TOO!";
divs.append(p);














