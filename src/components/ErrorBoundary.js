import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }


    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something Went Wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary

//Error Boundaries are React Components that catch JS error in their child component tree, log those errors, and display a fall-back UI.
//A Class Component Becomes an Error Boundary by defining either or both getDerivedStateFromError and ComponentDidCatch lifecycle methods.

