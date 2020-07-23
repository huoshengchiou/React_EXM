import React, { useState, useEffect, useCallback } from 'react'
import List from './List'

const Test_callback = () => {

    const [num, setnum] = useState(0)
    const [toggle, settoggle] = useState(false)

    //ori code 只調整theme但是連getItem關連到的child也會再跑
    //重render一次也會觸發下面的child偵測到
    //每一次重render等於重新宣告，會被視作值的改變
    // const getItem = () => {

    //     return [num, num + 1, num + 2]
    // }
    //增加之後下層child的useEffect,只有在num改變才會觸發
    const getItem = useCallback(() => {

        return [num, num + 1, num + 2]
    }, [num])
    //增加useCllback後只有當值真的發生改變才會觸發下游的useEffect
    const theme = {

        backgroundColor: toggle ? 'white' : 'black'


    }


    return (
        <>

            <h1>test callback</h1>
            <input value={num} type="text" onChange={e => setnum(e.target.value)} />

            <button onClick={() => settoggle(!toggle)}>change theme</button>
            <div style={theme}>00000000000</div>

            <List getItem={getItem} />
        </>
    )
}

export default Test_callback
