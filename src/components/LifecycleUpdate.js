//Lifecycle Methods of Updating

import React, { Component } from 'react'
import LifecycleUpdateChild from './LifecycleUpdateChild'

class LifecycleUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '100rab'
        }
        console.log('LifecycleUpdate Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleUpdate getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A ComponentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleUpdate shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleUpdate getSnapshotVeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleUpdate componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Chinmaya'
        })
    }

    render() {
        console.log('LifecycleUpdate Render')
        return (
            <div>
                <div>
                    LifecycleUpdate
                </div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleUpdateChild />
            </div>
        )
    }
}

export default LifecycleUpdate
