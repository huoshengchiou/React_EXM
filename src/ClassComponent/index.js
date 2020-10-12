import React, { Component } from 'react'
import MyChild from './MyChild'

export default class ClassComponent extends Component {
    render() {
        return (
            <>
                <MyChild parentgift={'hello'}/>
            </>
        )
    }
}
