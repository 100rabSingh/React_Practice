//Example of using Props in Functional Component

import React from 'react'

// function Greet(){
//     return <h1>Hello 100rab</h1>
// }

const Greet = props => {
console.log(props)
return (
     <div>
         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
         {props.children}
     </div>
    )
}
export default Greet;