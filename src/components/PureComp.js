//A Pure Component implements the shouldomponentUpdate lifecycle method by performing a shallow comparision on the props and state
//of the component.

import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure Comp Render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp


// You should not mutate object and arrays in props and state. For Ex: if you're adding an item to the list don't add it
// by pushing the item in the list because pure component will check shouldComponentUpdate for object and it will pass the 
// same reference, hence the component will never rerender even if there is a difference)
