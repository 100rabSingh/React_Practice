//Using React Fragment in table to avoid adding extra node to the DOM

import React from 'react'

function Column() {
    const items = []
    return (
        <React.Fragment>
            {/* {                              //This is the Example of Keyed Fragments
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>
                            Title
                        </h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>
                Name
            </td>
            <td>
                100rab
            </td>
        </React.Fragment>
    )
}

export default Column
