// (function(){
//     console.log("hello");
// })();
// ((a,b)=>{
//     console.log(a+b);
// })(10,10);
// (function demo(){
//     console.log("Hello world");
// })();
//Array-function:
//declaration
// let arr =[10,"hello",20, true,1n,undefined]
// console.log(arr);
//using new key word
// let arr1 = new Array(10,20,"hello",true)
// console.log(arr1);
// object declaration-way

// let obj ={
//     name:"abhi",
//     id:1,
//     arr:[10,20,30],
//     boolean:true,
//     demo:function(){
//     console.log("hello");
//     }}
//     console.log(obj);
//     console.log(obj.name);
//     console.log(obj.arr);
//     console.log(obj.boolean);
//     obj.demo();
//
function obj1(name,id){
    this.name=name;
    this.id=id;
    }
    let p1=new obj1("kumar",1)
    console.log(p1);
    console.log(p1.name);
    console.log(p1.id);
        
        

    
