// function parent(){
//     function child(){
//         console.log("I am child fun");
//     }
//     child()
// }
// parent()
// var a=10;
// let b=20;
// function parent1(){
//     var a= "hello"
//     let b="hi"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//function parent(){
// }
// parent1()
function parent2()
{
    function child1()
    {
        console.log("i am child1");

    }
    function child2()
    {
        console.log("i am child2");
    }
    return [child1,child2]
}
parent2()[0]()
parent2()[1]()
