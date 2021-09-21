//Using Inline CSS in React

import React from 'react'

function Inline() {                                 //In Inline css we have to define a variable and put the css into it.
    const heading = {                       
        fontSize : '72px',                          //We have to use Style properties but in camelCase.
        color : 'blue'
    }
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
