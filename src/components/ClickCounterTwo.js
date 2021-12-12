//Render Props Pattern

import React, { Component } from 'react'

class ClickCounterTwo extends Component {
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
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        )
        //Here incrementCount and Count is provided by CounterTwo Component
    }
}

export default ClickCounterTwo
