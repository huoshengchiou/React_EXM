import React from 'react'



const HOC = (Component1, Component2) => ({ name = 'sheng' }) => {



    return (
        <>
            {Component1 && <Component1 name='sheng' />}
            {Component2 && <Component2 name='sheng' />}
        </>
    )


}

export default HOC