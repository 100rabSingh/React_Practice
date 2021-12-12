//Render Props Pattern

import React, { Component } from 'react'

class HoverCounterTwo extends Component {

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
                <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
            </div>
        )
        //Here incrementCount and Count is provided by CounterTwo Component
    }
}

export default HoverCounterTwo
