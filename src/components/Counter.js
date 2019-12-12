import React, { Component } from 'react'

class Counter extends Component {

    componentWillReceiveProps(newProps) {
        const { number } = this.props
        console.log(`prev --> ${number} next ${newProps.number}`)
        if (number !== newProps.number) {
            alert('Do somthing')
        }
    }

    render() {
        const { number } = this.props
        return(
            <div>
                { number }
            </div>
        )
    }
}

export default Counter