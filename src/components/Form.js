//Form Handling here html components are controlled by react.

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    handleUsernameChange = (event) => {             //Luckily when we use onChange attribute the event is passed as params by default.
        this.setState({
            username: event.target.value            //Targeting the value passed in Event
        })
    }
    handleChangeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleChangeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()                                              //To prevent the data from disappearing after dismissing the alert
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username : </label>
                        <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
                    </div>
                    <div>
                        <label>Comments : </label>
                        <textarea value={this.state.comments} onChange={this.handleChangeComments}></textarea>
                    </div>
                    <div>
                        <label>Topic : </label>
                        <select value={this.state.topic} onChange={this.handleChangeTopic}>
                            <option value="React">
                                React
                            </option>
                            <option value="Angular">
                                Angular
                            </option>
                            <option value="Vue">
                                Vue
                            </option>

                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
