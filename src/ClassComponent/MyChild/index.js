import React, { Component } from 'react'

export default class MyChild extends Component {
    constructor(props) {
        super(props);
        console.log('parentgift',props.parentgift)
        this.state = {
          copy:props.parentgift,
          copy2:'ok',
        };
    this.componentDidMount=()=>{
        console.log('Mount')
    }
    this.componentDidUpdate=()=>{
        console.log('update')
    }


    }
    render() {
        const {copy,copy2}=this.state
        return (
            <>
            {copy}
            {copy2}
                {this.props.parentgift}
                <button onClick={()=>this.setState({copy:'world'})}>touch me</button>
                <button onClick={()=>this.setState({copy2:'world'})}>touch me</button>

            </>
        )
    }
}
