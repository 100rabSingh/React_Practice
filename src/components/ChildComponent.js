//Example of method used as props in parent and child component (also refer to ParentComponent.js File)

import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
