let arth = function(){
    a=Number(window.prompt("Enter a value"))
    b=Number(window.prompt("Enter b value"))
    c=Number(window.prompt("Enter c value"))
    let d=a+b+c;
    console.log(d)
    let e=a-b-c;
    console.log(e)
    let f=a*b*c
    console.log(f)
    let g=a/b/c
    console.log(g)
    let h=a%b%c
    console.log(h)
    console.log("increment of a",a++)
    console.log("increment of a",a++)
    console.log("decrement of b",b--)
    console.log("decrement of b",b--)

    if(a>=b && a>=c){
        console.log("a is greater")
    }
    else if(b>=a && b>=c){
        console.log("b is greater")
    }
    else{
        console.log("c is greater")
    }

}
arth()