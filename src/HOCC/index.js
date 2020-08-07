import React from 'react'
import HOC from '../TestHOC'

const HOCC = props => {
    console.log(props)
    return (
        <>

        </>
    )
}

export default HOC(HOCC)
