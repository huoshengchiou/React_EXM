import { useState, useEffect } from 'react'


const callback = (key, initialVal) => {
    const saveVal = JSON.parse(localStorage.getItem(key))
    if (saveVal) return saveVal

    if (initialVal instanceof Function) return initialVal()

    return initialVal
}


export default (key, initialval) => {

    const [val, setVal] = useState(() => { return callback(key, initialval) })



    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(val))

    }, [val])




    return [val, setVal]

}