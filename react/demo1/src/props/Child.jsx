/* eslint-disable react/prop-types */
// import React from "react"
// class Child extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>My name is {this.props.name}</h1>
           
            

//             </>
//         )
        
//     }
// }
// export default Child

// const Child = (props) => {
//   let {name,id,designation}=props.obj
//   return (
//     <div>
//         {/* <h1>My name is {props.name}</h1> */}
//         {/* {
//           props.arr.map((x) => {
//             return(
//               <li>{x}</li>
//             )
//           })
//         } */}
//         <h1>{name},{id},{designation}</h1>
//     </div>
//   )
// }

// export default Child


const Child = (props) => {
  return (
    <div>
      <button onClick ={()=>props.fun()}>click</button>
    </div>

  )
}

export default Child