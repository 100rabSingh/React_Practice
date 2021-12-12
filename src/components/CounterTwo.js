// Render Props Pattern

import React, { Component } from 'react'


class CounterTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
        //The CounterTwo Component does not render anything on its own, it is simply going to render whatever is passed as render prop
        //while doing so it passes count state and incrementCount method.
    }
}

export default CounterTwo
