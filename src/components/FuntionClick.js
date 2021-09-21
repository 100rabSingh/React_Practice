//Example of Event Handler In Functional Components 

import React from 'react'

function FuntionClick() {
    function clickHandler() {
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FuntionClick
