//Conditional Rendering in React

import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    

    render() {
        
        /** i) If/else Conditional Rendering */
        // if(this.state.isLoggedIn){
        //     return <div>Hello 100rab</div>
        // }else{
        //     return <div>Hello Guest User</div>
        // }

        /** ii) Element Variable Conditional Rendering */
        // let message                         //Declaring a Variable
        // if(this.state.isLoggedIn){
        //     message = <div>Hello 100rab</div>
        // }else{
        //     message = <div>Hello Guest User</div>
        // }

        // return <div>{message}</div>         //Returning the Variable


        /** iii) Ternary Conditional Operator Conditional Rendering */

        // return (
        //     this.state.isLoggedIn ?
        //     <div>Hello 100rab</div> :           //If the Condition is True then this statement will execute
        //     <div>Hello Guest User</div>         //If the Condition is False then this statement will execute
        // )

        /** iv) Short Circuit operator Conditional Rendering */
        //Remember Short Circuit Operator approach is special condition of ternary operator approach - We use this
        // when we have to run and statement when it is true and do nothing when it is false.
        return this.state.isLoggedIn && <div>Hello 100rab</div>
    }
}

export default UserGreetings
