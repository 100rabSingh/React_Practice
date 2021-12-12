//Higher Order Component

import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }

    render() {
        const { count, incrementCount } = this.props   //Using prop from HOC withCounter ; here we're Destructing and Reusing Code instead of Repeating it
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hovered {count} Times </h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 5)

//in commented code we're using increment count and constructer functionality same as in ClickCounter.js, instead of resuing the code we're Repeating it.
//Solution to that problem is to lift the counter logic to a parent component and pass props.
//but here the counter component is the children of the same component.
//Imagine scenerio where counter component is scattered into react component tree. Here lifiting the state would not be a good solution.
//We need share common functionalities without repeating the code, this is where HOC comes into the picture. 
