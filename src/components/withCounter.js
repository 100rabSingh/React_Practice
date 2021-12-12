//Simple Higher Order Component

import React from "react"

const withCounter = (WrappedComponent, incrementNumber) => {          //If you want to add another parameter to HOC
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }

        render() {
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                {... this.props}                                //Passing down Rest of the Props to Enhanced Components
            />
        }
    }
    return WithCounter
}

export default withCounter