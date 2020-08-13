import React, { useState } from 'react'
import { Fragment } from 'react'

function Child2() {
    console.log('Child2 render')
    const test = 'test'
    // ------------------------
    const [text1, setText] = useState('')
    const handlebtn = () => {

    }





    return (
        <>
            <div>Child2  {text}</div>
            <button onClick={() => setText('hello')}>click</button>

        </>
    )
}

export default Child2

