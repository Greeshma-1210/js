//asynchronous function
function main(m,n){
    new Promise((reslove,reject)=>{
    setTimeout(()=>{
        if(isNaN(m)||isNaN(n)){
            return reject()
        }
    for(let i=m;i<=n;i++){
    console.log(i);
    }
    return reslove()
    },5000)})

.then(()=> console.log("promise is resolved"))
.then(()=> console.log(10*10))
.catch(()=> console.log("error occured"))
}
//main(1,"10a")
main(1,10)
function sample(){
console.log("no's printed");
}
sample()
//Methods of asynchronous function:setTimeOut and setInterval
// window.setTimeout(()=>{
//     console.log(" iam settimeout");
// },5000)
// window.setInterval(()=>{
//     console.log(" iam setinterval");
// },3000)
//synchronous function
// function main(m,n){
//     for(let i=m;i<=n;i++){
//     console.log(i);
// }
//     }
// main(1,10)
// function sample(){
// console.log("no's printed");
// }
// sample()
// let online = window.navigator.onLine//navigator is the api,online is the method
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(online==true){
//             return resolve()
//         }else{
//             return reject()
//         }
//     },2000)
// })
// .then(()=> console.log("online....😀"))
// .catch(()=>console.log("ofline....🙃"))
