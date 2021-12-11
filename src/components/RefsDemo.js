import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()   // Ref Step 1: create Ref,  step 2: attach reference to the element using ref prop and assigning the property (line 30)
        this.cbRef = null                   //CallbackRef step 1: Create callback Ref and assign it to the null
        this.setCbRef = (element) => {      // CallbackRef step 2: Assign the property of DOM element to the Callback Ref as a parameter
            this.cbRef = element            // CallbackRef step 3: attach the ref to an element using the method that in turn assigns the element. (line 32)
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()       //ref Step 3: element is accessed using this.(Reference_variable).current
        console.log(this.inputRef)

        if (this.cbRef) {
            this.cbRef.focus()              //Callback Ref Step 4: Directly Accessed using this.(Reference_variable)
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <br />
                <input type="text" ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div >
        )
    }
}

export default RefsDemo
