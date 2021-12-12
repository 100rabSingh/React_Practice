//Context

import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    render() {
        return (
            <div>
                Component E Context {this.context}
                <ComponentF />
            </div>
        )
    }
}

ComponentE.contextType = UserContext        //Step 2 ContextType

export default ComponentE
