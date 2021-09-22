// Child Component for Lifecycle Methods of Updating

import React, { Component } from 'react'

class LifecycleUpdateChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '100rab'
        }
        console.log('LifecycleUpdateChild Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleUpdateChild getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle B ComponentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleUpdateChild shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleUpdateChild getSnapshotVeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleUpdateChild componentDidUpdate')
    }

    render() {
        console.log('LifecycleUpdate Render')
        return (
            <div>
                LifecycleUpdateChild
            </div>
        )
    }
}

export default LifecycleUpdateChild
