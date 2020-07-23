import React, { useEffect, useState } from 'react'

const List = ({ getItem }) => {

    // console.log('render child')



    const [render, setrender] = useState([])
    console.log('render')
    useEffect(() => {
        console.log('觸發改變')
        setrender(getItem())
    }, [getItem])




    return (
        <>
            <ul>
                {render.map(val => <li>{val}</li>)}
            </ul>
        </>
    )
}

export default List
