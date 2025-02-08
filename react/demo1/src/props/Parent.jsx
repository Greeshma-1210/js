// import React from "react"
// import Child from "./Child"
// class Parent extends React.Component{
//     obj ={
//         username:"Greeshma",
//         rollno:"2211CS010243",
//         education:"B.Tech"
//     } 
//     render(){
//         return(
//             <>
//             <Child name= {this.obj.username}/>
//             </>
//         )
        
//     }
// }
// export default Parent
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   let obj1= {
//     name:"abc",
//     id:1,
//     designation:"developer"
//   }
//   return (
//     <div>
//         {/* <Child name="Greeshu"/> */}
//         {/* <Child arr = {[10 , 20 , 30 ,40]}/> */}
//         <Child obj ={obj1}/>
        
//     </div>
//   )
// }

// export default Parent

import Child from './Child'

const Parent = () => {
  let demo = ()=>{
    window.alert("I am arrow function")
  }
  return (
   <>
   <Child fun ={demo}/>
   </>
  )
}

export default Parent