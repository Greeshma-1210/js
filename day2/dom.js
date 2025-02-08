// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// document.title="amazon"
// console.log(document.body);
// let img=document.images
// console.log(img);
// //console.log(img[0]);
// //console.log(img[1]);
// //console.log(img[2]);
// for(let i=0;i<img.length;i++){
//     console.log(img[i]);
//     img[i].style.height="200px"
//     img[i].style.width="200px"
//     img[i].style.borderRadius="100%"
//     img[i].alt="image"
// }
//getElementsByclassName method
let a= document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent="batch 5"
a.style.backgroundColor="black"
a.style.color="white"
a.style.textAlign="center"
//getElementsByClassName
let a1=document.getElementsByClassName("demo1")
console.log(a1)
console.log(a1[0]);
console.log(a1[0].textContent);
a1[0].textContent="Hello-World"
a1[0].style.color="blue"
console.log(a1[1]);
//getElementsByTagName
let b= document.getElementsByTagName("ol")
console.log(b);
console.log(b[1]);
b[1].style.backgroundColor="black"
b[1].style.color="white"
//getElementsByName
let c=document.getElementsByName("demo2")
console.log(c);
console.log(c[1]);
c[1].style.backgroundColor="red"
c[1].style.color="white"
c[1].textContent="Mruh"
document.querySelector
let d=document.querySelector("#demo")
console.log(d);
let f= document.querySelector(".demo1")
console.log(f);
//document.querySelectorAll
let e=document.querySelectorAll("#demo")
console.log(e);
console.log(e[0]);
let g=document.querySelectorAll(".demo1")
console.log(g);
//events in dom(3 ways)
//1st way
function event1(){
    console.log("Cse");   
}

















