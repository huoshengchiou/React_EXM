import React, { useState, useEffect, useRef } from 'react'

function Timertest() {

    const [time, setTime] = useState(0)
    const flag = true
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, []);




    // useEffect(() => {
    //     if (!time) return


    //     setTimeout(() => {
    //         console.log(time)
    //         if (!flag) {
    //             setTime(2000)
    //             return
    //         }
    //         setTime(1000)
    //         console.log('ok')
    //     }, time)

    // }, [time])

    return (
        <>
            <div>{'time', time}</div>

        </>
    )
}

export default Timertest
