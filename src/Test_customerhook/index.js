import React from 'react'
import useLocalStorage from './useLocalStorage'
import useLogger from './useLog'

const Test_customerhook = () => {

    const [name, setname] = useLocalStorage('name', '')
    useLogger(name)


    return (
        <>
            <input type="text" value={name} onChange={e => setname(e.target.value)} />
        </>
    )
}

export default Test_customerhook
