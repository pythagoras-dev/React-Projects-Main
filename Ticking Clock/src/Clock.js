import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.updateClock(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    render() {
        return (
            <div className='Time'>
                <p>{this.state.time}</p>
            </div>
        )
    }
}

export default Clock;

