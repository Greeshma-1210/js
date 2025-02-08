
// import { useState } from 'react'
// const State = () => {
//     // let [name,setName]=useState("Greeshma")
//     let [id,setId]=useState(10)
//     // console.log(name);
//     console.log(id);
//     // console.log(setName);
//     console.log(setId);
    
//     let demo =()=>{
//         // setName("greeshu")
//         setId(20)
//     }
    
//   return (
//     <div>
//         <h1>{id}</h1>
//         <button onClick={demo}>click</button>
//     </div>
//   )
// }

// export default State
// import React, { useState } from 'react'

// const State = () => {
//   let [state,setState]=useState(0)
//   let incr =() =>{
//     setState(state+1)
//   }
//   let reset =() =>{
//     setState(0)
//   }
//   let decr =() =>{
//     setState(state-1)
//   }
//   return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={incr}>increment</button>
//     <button onClick={reset}>reset</button>
//     <button onClick={decr}> decrement</button>
//     </>
//   )
// }

// export default State

// import React, { useState } from 'react'

// const State = () => {
//   let[name,setName]=useState('')
//   let[password,setPassword]=useState('')
//   let demo=(e)=>{
//     e.preventDefault()
//     console.log({name,password});
//     name==="admin" && password==='12345'? window.open("http://www.pixabay.com"):console.log("error"); 
//   }
//   return (
//    <>
//    <form action =" "></form>
//    <label htmlFor ="name">Name:</label>
//    <input type ="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
//    <br/>
//    <label htmlFor ="password">Password:</label>
//    <input type ="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
//    <br/>
//    <button onClick={demo}>Submit</button>

//    </>
//   )
// }

// export default State

// import React from 'react'

// const State = () => {
//   let[state,setState]=useState(true)
//   let demo =()=>{
//     setState(!state)
//     state===true ? video.play(): video.pause()
//   }
//   return (
//     <>
//     </>
//   )
// }

// export default State