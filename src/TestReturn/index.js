import React, { useEffect, useState, useRef } from 'react'

function TestReturn() {

    const [input, setInput] = useState('')
    const [dis, setDis] = useState('')
    const recordTime = useRef(2000)
    console.log('程式執行')
    useEffect(() => {
        if (!input) return
        if (recordTime.current === 2000) {
            // console.log('進入if')
            setDis('進入if')
            return
        }
        console.log('繼續執行')

    }, [input])


    const habdleChange = e => {
        setInput(e.target.value)
        // console.log(e.target.value)

    }


    return (
        <>
            {dis}
            <input type="text" onChange={e => habdleChange(e)} />

        </>
    )
}

export default TestReturn
