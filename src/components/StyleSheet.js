//Using Styling CSS in React

import React from 'react'
import './MyStyles.css'

function StyleSheet(props) {
    const className = props.primary ? 'primary' : ''
    //Here we're reading the value of primary prop and if it is true then the Class name will be ser to 'primary' else to nothing
    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheet</h1>
        </div>                                              //Passing className variable as a value in className Attribute
    )
}

export default StyleSheet
