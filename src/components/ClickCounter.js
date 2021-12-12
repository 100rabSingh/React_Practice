//Higher Order Component -  refer to HoverCounter.js

import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

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
                <button onClick={incrementCount}>
                    {this.props.name} Clicked {count} Times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 10)
