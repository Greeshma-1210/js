let operation= (a,b,task) => {
    console.log(task(a,b));
}
operation(a=Number(prompt("enter a value")),
          b=Number(prompt("enter a value")),
          (a,b)=>{
            return a+b
          })
console.log(a+b);
operation(a=Number(prompt("enter a value")),
          b=Number(prompt("enter a value")),
          (a,b)=>{
            return a-b
          })
console.log(a-b);
operation(a=Number(prompt("enter a value")),
          b=Number(prompt("enter a value")),
          (a,b)=>{
            return a*b
          })
console.log(a*b);