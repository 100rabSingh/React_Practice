//Life Cycle Methods of Mounting

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '100rab'
        }
        console.log('Lifecycle A Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A ComponentDidMount')
    }

    render() {
        console.log('Lifecycle A Render')
        return (
            <div>
                <div >
                    LifeCycle A
                </div>
                <LifecycleB />
            </div>
            //LifecycleB is a Child Component
        )
    }
}

export default LifeCycleA
