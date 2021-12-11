import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '100rab'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: '100rab'
            })
        }, 2000)
    }

    render() {
        console.log('*******************************Parent Comp Render***********************************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}></MemoComp>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
