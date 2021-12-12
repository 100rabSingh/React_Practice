//Context
//Step 3: In the component where the Username is required use Consumer Component i.e, UserConsumer and pass in a fucntion as its child
// the function recieve the Context Value as its parameter, which can be used in the desired JSX

import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div> hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
