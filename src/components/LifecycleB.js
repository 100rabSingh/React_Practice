//Child Component for LifeCycle Method of Mounting

import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '100rab'
        }
        console.log('Lifecycle B Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle B ComponentDidMount')
    }

    render() {
        console.log('Lifecycle B Render')
        return (
            <div >
                LifeCycle B
            </div>
        )
    }
}

export default LifecycleB
