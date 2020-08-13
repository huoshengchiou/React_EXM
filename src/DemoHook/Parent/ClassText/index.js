import React, { Component } from 'react'

export default class ClassText extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }


    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log('ClassText render')
        return (
            <>
                <h1>
                    ClassText
             </h1>
                <div>{this.state.count}</div>
                <button onClick={this.handleClick}>click class</button>
            </>
        )
    }
}
