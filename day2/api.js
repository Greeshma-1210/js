// let obj ={
//     name:"abhi",
//     id:1,
//     designation:"developer"
// }
// console.log(obj);
// let obj1 = JSON.stringify(obj)
// console.log(obj1);
// let obj2 = JSON.stringify(obj1)
// console.log(obj2);
// window.fetch("data.json")
// // .then((data)=>console.log(data))
// .then((data)=>data.json())
// .then((res)=>{
//     // console.log(res);
//     // console.log(res[0]);
//     // console.log(res[0].name);
//     res.map((x)=>{      //map to iterate all the object present in the array
//         console.log(x);
//         console.log(x.name);
//         console.log(x.id);
//         console.log(x.designation);
//         document.body.innerHTML+=`<h2>${x.name}</h2>`
//         document.body.innerHTML+=`<h2>${x.id}</h2>`
//         document.body.innerHTML+=`<h2>${x.designation}</h2>`     
//     })  
// })
// .catch(()=>{
//     console.log("error occured");  
// })
let btn=document.getElementById("btn")
console.log(btn);
btn.onclick=()=>{
    let search=document.getElementById("search").value
    console.log(search);
    let page=30
    window.fetch(`https://pixabay.com/api/?key=48494806-8b6e3f3d1b0fd69c6cad415c4&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data)=>data.json())
    .then((res)=>{
        console.log(res);
        console.log(res.hits);
        res.hits.map((x)=>{
            console.log(x);
        let demo=document.getElementById("demo")
        console.log(demo);
        demo.innerHTML+=`<img src=${x.previewURL} />`  
        })   
    })
}