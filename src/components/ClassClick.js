//Example of Event Handler and Event Binding using Arrow Function as Class Property 
//Other methods to bind and event are i) Arrow Function Approach ii) Binding in the Render Method iii) Binding in Constructor
//Arrow Function as Class Property and Binding in Constructor are the two Go-to Approaches

import React, { Component } from 'react'

class ClassClick extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello!'
        }
    }
    

    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick = {this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
